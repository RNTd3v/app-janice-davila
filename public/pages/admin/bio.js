import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import BioService from '../../src/services/BioService';
const bio = new BioService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class AdminBio extends React.Component {
    constructor() {
        super();
        
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.onEditorStateChangePt = this.onEditorStateChangePt.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            title: 'Bio',
            title_pt: 'Bio',
            description: '',
            description_pt: '',
            editorState: '',
            editorStatePt: ''
        }
    }

    componentDidMount() {
        bio.getBio().then(res =>  {
            const html = res.description;
            const htmlPt = res.description_pt;
            const contentBlock = htmlToDraft(html);
            const contentBlockPt = htmlToDraft(htmlPt);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                const contentStatePt = ContentState.createFromBlockArray(contentBlockPt.contentBlocks);
                const editorStatePt = EditorState.createWithContent(contentStatePt);
                this.setState ({
                    editorState,
                    editorStatePt
                });
            }
        });
    }

    onEditorStateChange (editorState) {
        const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        this.setState({
          editorState,
          description: html
        });
        console.log(this.state.description);
    };

    onEditorStateChangePt (editorStatePt) {
        const html = draftToHtml(convertToRaw(editorStatePt.getCurrentContent()))
        this.setState({
          editorStatePt,
          description_pt: html
        });
        console.log(this.state.description_pt);
    };

    save() {

        const {title, title_pt, description, description_pt} = this.state;
        const data = {
            title, title_pt, description, description_pt
        }

        bio.saveBio(data).then(res =>  {
            console.log(res);
        });
    }

    render () {
        const { editorState, editorStatePt } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                </header>
                <main className="main">
                    <div className="editor">
                        <h3 className="title">Content (En)</h3>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange}
                            toolbar={{
                                options: ['inline', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
                            }}
                        />
                    </div>
                    <div className="editor">
                        <h3 className="title">Contéudo (Pt)</h3>
                        <Editor
                            editorState={editorStatePt}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChangePt}
                            toolbar={{
                                options: ['inline', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
                            }}
                        />
                    </div>
                    <button className='button -center' onClick={this.save}>Save</button>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminBio);