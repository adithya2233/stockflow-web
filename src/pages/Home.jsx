import React from 'react'

import Card from '../component/Card'
import Button from '../component/Button' 

import {Button as ShadCNButton} from '../components/ui/button';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Card component="This is a card" />
      <Button />
      <ShadCNButton>OK</ShadCNButton>                         
      <ShadCNButton variant='outline'>Cancel</ShadCNButton>                         
    </div>
  )
}

export default Home