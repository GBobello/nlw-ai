
# NLW-IA

Projeto desenvolvido nas aulas da Rocket Seat, se trata de um projeto em que é possível fazer upload de vídeos para que seja gerada a transcrição deste vídeo e assim ou o título ou a descrição do vídeo baseada na transcrição.

Para rodar esse projeto é necessário fazer o git clone do projeto:

    git clone https://github.com/GBobello/nlw-ai.git

Após isso instalar os pacotes necessários dentro dos dois projetos:

    npm install

Também é necessário adicionar ao projeto **api** um arquivo **.env** que deve ter as seguintes informações:

    DATABASE_URL="file:./dev.db"
    OPENAI_KEY="api-key"

Após isso já é possível rodar o back-end e o front-end, para rodar qualquer um dos dois entre na pasta de cada e rode:

    npm run

E está feito, agora você pode testá-lo.

Obrigado pelo apoio.