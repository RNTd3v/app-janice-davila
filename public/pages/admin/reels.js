import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth'

import ReelService from '../../src/services/Reel';
const reel = new ReelService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class AdminReels extends React.Component {
    constructor() {
        super();
        this.state = {
            reels: [],
            changeTheOrder: false
        }
    }

    componentDidMount() {
        this.getReels();
    }

    onDragStart = (e, index) => {
      this.draggedReel = this.state.reels[index];
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = index => {
      const draggedOverReel = this.state.reels[index];

      // if the item is dragged over itself, ignore
      if (this.draggedReel=== draggedOverReel) {
        return;
      }

      // filter out the currently dragged item
      let reels = this.state.reels.filter(reel => reel !== this.draggedReel);

      // add the dragged item after the dragged over item
      reels.splice(index, 0, this.draggedReel);

      this.setState({ reels, changeTheOrder: true });
    };

    onDragEnd = () => {
      this.draggedIdx = null;
    };

    getReels() {
        reel.getReels().then(res =>  {
          const reels = res.sort((a, b) => a.order_by - b.order_by);
          this.setState({reels});
        });
    }

    deleteReel(idReel) {
      reel.deleteReel(idReel).then(() =>  {
        this.getReels();
      });
    }

    saveOrderReel() {
      this.setState({ changeTheOrder: false });
      this.state.reels.forEach((reels, index) => {
        reel.changeOrderReel({order_by: index}, reels.id)
        .then()
        .catch(err => console.error(err));
      })
    }

    render () {
        const { reels } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/reels/reel `)}>
                        <i className="far fa-plus-square icon"></i>
                        <small className="text">Add</small>
                    </div>
                </header>
                <main className="main">
                    <h2 className="title">Reels</h2>
                    <ul className="table">
                        <li className="row -head">
                            <div className="col -flex">
                                Category
                            </div>
                            <div className="col -act">
                                Action
                            </div>
                        </li>
                        {
                            reels
                              .map((reel, idx) => (
                                <li className="row" key={reel.id} onDragOver={() => this.onDragOver(idx)}>
                                    <i className="fas fa-bars icon" draggable
                                      onDragStart={e => this.onDragStart(e, idx)}
                                      onDragEnd={this.onDragEnd}></i>
                                    <div className="col -flex">
                                        {reel.category}
                                    </div>
                                    <div className="col -act">
                                        <div className="icon -editar action" onClick={() => Router.push(`/admin/reels/reel/${reel.id}`)}>
                                            <i className="far fa-edit icon"></i>
                                            <small className="text">Edit</small>
                                        </div>
                                        <div className="icon -delete  action" onClick={() => this.deleteReel(reel.id)}>
                                            <i className="fas fa-eraser icon"></i>
                                            <small className="text">Delete</small>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <button className={`button -center ${!this.state.changeTheOrder ? '-disabled' : ''}`} disabled={!this.state.changeTheOrder} onClick={() => this.saveOrderReel()}>Save the order</button>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminReels);
