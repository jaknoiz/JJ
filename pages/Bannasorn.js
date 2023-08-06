import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Jamorn() {
    return (
       <>
    <Head>
        <title>Bannasorn</title>       
      </Head>

          <h2>ข้อมูล</h2>
          <a>นาย บรรณสรณ์ คงศรี</a><br></br>
          <a>รหัสนิสิต 642021148</a><br></br>
          <a>สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์</a>
          <br></br>
          <br></br>
          <img src="sorn.jpg" style={{ width: '300px', height: '350px', maxWidth: '100%', maxHeight: '100%' }} />
        
      </>
    )
  
}