import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react';


export default function Home() {
  
  return (
    <>
    
    

      <Head>
        <title>Member</title>       
      </Head>      
        <div className={styles.center}>
          <h1>Member</h1>
          
        </div>

      

        <div>
          <a
            href="http://localhost:3000/Jamorn"
          >
            <h2>
              Jamorn 
            </h2>            
          </a>
          <a
            href="http://localhost:3000/Bannasorn"                                  
          >
            <h2>
              Bannasorn 
            </h2>            
          </a>
          <a
            href="http://localhost:3000/Weerapat"                                 
          >
            <h2>
              Weerapat 
            </h2>           
          </a>  


          <div className={styles.center}>
          <h1>API</h1>
          
        </div>

          <a
            href="http://localhost:3000/script"                                 
          >
            <h2>
            รายงานสถานการณ์ COVID-19 ประจำสัปดาห์ แยกตามรายจังหวัด 
            </h2>           
          </a>      
        </div>       
    </>
  )
}
