import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import Seo from '../components/Seo';
import { Container } from '../styles/pages/Home/style';
import HeaderComponent from '../components/Header';

const ModalContent = dynamic(
  () => import('../components/Modal'),
  { loading: () => <p>Carregando...</p> }
);

export default function Home() {

  const [ isShow, setIsShow ] = useState(false)

  function handleOpenModal(){
    setIsShow(!isShow)
  }

  return (
    <>
      <Seo title="Fala galera" description="Seja bem vindo e blá" />
      <HeaderComponent />
      <Container>
        <Image src="/img/logo.png" height={80} width={200}/>
        <h1>Hello NextJS</h1>
        <button onClick={ handleOpenModal }> { isShow ? 'Fechar modal' : 'Abrir modal'} </button>

        <div>
          { isShow && <ModalContent />}
        </div>
      </Container>
    </>
  )
}
