import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useMoralis } from "react-moralis";

export default function App( ) {
  

    return (
      <div className={styles.container}>
           <Head>
             <title>Zero 2 Infinity</title>
             <meta name="description" content="Generated by create next app" />
             <link rel="icon" href="/favicon.ico" />
           </Head>
           <nav className={styles.nav}>
             <div className={styles.navContainer}>
             <ul className={styles.navBar}>
                   <li className={styles.button} onClick={() => authenticate()}>Connect</li>          
               </ul>
             </div>
            </nav> 
     
           <main className={styles.main}>
          
              
              <h2 className={styles.title}>Zero to Infinity</h2>
              <div className={styles.subContainer}>
                <div className={styles.button1}>Mint</div>
                <div className={styles.button2}>Whitepaper</div>
              </div>
           </main>
           <div className={styles.img}></div>
           <footer className={styles.footer}>
             <a
               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
               target="_blank"
               rel="noopener noreferrer"
             >
               Powered by{' '}
               <span className={styles.logo}>
                 <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
               </span>
             </a>
           </footer>
         </div> 
      
       )  
  }


