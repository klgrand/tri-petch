This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Here is [demo](https://tri-petch-gamma.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Docker Path

Build docker image

```bash
docker build -t tri-petch ./
```

Run docker

```bash
docker run -p 3000:3000 tri-petch
```

then, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
