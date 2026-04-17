# Lab 8.1: Next.js Blog with SSR and SSG

**Student Name:** Zhantore 


## Overview
This Next.js application demonstrates Static Site Generation (SSG) and Incremental Static Regeneration (ISR).

### SSR vs SSG
* **SSG (Static Site Generation):** Uses `getStaticProps`. HTML is generated at build time. It is incredibly fast and easily cacheable by CDNs. Ideal for blogs and documentation.
* **ISR (Incremental Static Regeneration):** Adding `revalidate: 60` to `getStaticProps` allows Next.js to regenerate the static page in the background every 60 seconds if new requests come in, ensuring content stays relatively fresh without rebuilding the whole site.
* **SSR (Server-Side Rendering):** Uses `getServerSideProps`. HTML is generated dynamically on the server for *every* request. Best for user-specific data or highly dynamic content.