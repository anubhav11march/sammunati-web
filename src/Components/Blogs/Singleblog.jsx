import React from 'react'
import cardImage from '../../Assets/Images/cardImage.jpg'
import '../../Assets/Css/blog.css'
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

function Singleblog() {
  return (
    <>
        <section className="singleBlog-wrapper w-100 ">
            <main className="singleBlog-img-container">
                    <img src={cardImage} alt="No blog " />
            </main>
            <div className='d-flex container my-4'>
            <Button size="small text-dark d-flex align-items-center"><FavoriteBorderIcon/> <p className='ps-2'>123</p></Button>
            <Button size="small text-dark  align-self-flex-end"><ShareIcon/></Button>
            </div>
            <main className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto quod dolorum eaque, inventore qui sapiente accusantium ab, quo modi ut porro quisquam doloremque libero. Odit eos dolores recusandae repellendus nostrum explicabo sequi quis atque! Dolore eaque consectetur, dicta adipisci est accusamus velit repudiandae nostrum debitis voluptate sunt alias atque enim? Ullam quidem, esse repellendus earum nobis voluptates iste animi ea sapiente! Consectetur vel dolorem quo similique architecto. Quod expedita, fuga laborum aliquam laudantium accusantium quibusdam distinctio suscipit id quia quo deleniti doloremque quisquam, fugit ipsa alias maxime pariatur, ex sit error iusto. Autem quia fuga adipisci excepturi harum magni facere quaerat culpa corporis natus suscipit quae illo delectus nihil, dolorum, minus ullam, unde fugit laudantium iste totam nobis a voluptatem? Aliquid mollitia tempora architecto recusandae aperiam sequi labore eveniet eius, molestias dolores esse eaque, obcaecati neque cupiditate modi, quisquam dolore saepe soluta perferendis corporis vel veritatis? Quasi suscipit molestias consequuntur, laborum deleniti expedita beatae minus eveniet quos. Cum iure quaerat minima consequatur fuga? Quam saepe voluptatum aliquam accusantium vitae sequi tenetur asperiores, natus architecto. Praesentium nam sapiente quisquam reiciendis atque aliquid omnis officiis a ut quod. Aliquid voluptate iure ratione quidem quia saepe id et magnam eius, mollitia ipsam?</p>
            </main>
        </section>
    </>
  )
}

export default Singleblog