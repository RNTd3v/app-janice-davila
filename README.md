# Janice website

![Badge](https://img.shields.io/static/v1?label=react&message=v16&color=61DAFB&style=flat-square&logo=react&logoColor=61DAFB) ![Badge](https://img.shields.io/static/v1?label=nextjs&message=v7&color=black&style=flat-square&logo=next&logoColor=61DAFB) ![Badge](https://img.shields.io/static/v1?label=adonis&message=v5&color=black&style=flat-square&logo=adonisjs&logoColor=61DAFB) ![Badge](https://img.shields.io/static/v1?label=mysql&message=v2&color=black&style=flat-square&logo=mysql&logoColor=61DAFB) ![Badge](https://img.shields.io/static/v1?label=Github&message=v1&color=black&style=flat-square&logo=github&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=GithubActions&message=v1&color=black&style=flat-square&logo=github-actions&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=DigitalOcean&message=v1&color=black&style=flat-square&logo=DigitalOcean&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=cloudflare&message=v1&color=black&style=flat-square&logo=Cloudflare&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=pm2&message=v1&color=black&style=flat-square&logo=pm2&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=nginx&message=v1&color=black&style=flat-square&logo=nginx&logoColor=white)

## Instalando a aplicação
**Backend:**

```bash
yarn
```

**Frontend:**

```bash
cd public
yarn
```

## Construção do frontend

```bash
yarn build-dev
```

## Executando em desenvolvimento

**Rodando api:**

1. Precisa ter o **mysql** rodando com o banco de dados **janice_db** criado. Solicitar arquivo sql para massa.
1. Criar arquivo **.env** na raiz do projeto. Use o **.env.example** para isso.

```bash
yarn dev
```

## Deploy
- Ao fazer um push na branch principal (main) é feito o deploy no servidor da Digital Ocean;
- Ver o status na aba actions no github

## Informações importantes
- A Api foi desenvolvida usando o adonisjs (node);
- A Aplicação foi desenvolvida com nextjs (react);
- O DNS está configurado na Cloudflare;
- É utilizado o Pm2 para subir a aplicação no servidor;
- Foi contratado backup do dopplet da Digital Ocean;

