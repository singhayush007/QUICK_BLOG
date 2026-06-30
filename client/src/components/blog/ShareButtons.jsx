import React from 'react'
import { assets } from '../../assets/assets'

const ShareButtons = ({ title }) => {
  const encoded = encodeURIComponent(title || '')
  const url = encodeURIComponent(window.location.href)

  return (
    <div className='my-24 max-w-3xl mx-auto'>
      <p className='font-semibold my-4'>Share this article on social media</p>
      <div className='flex gap-2'>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target='_blank' rel='noreferrer'>
          <img src={assets.facebook_icon} width={50} alt="Share on Facebook" />
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${encoded}&url=${url}`} target='_blank' rel='noreferrer'>
          <img src={assets.twitter_icon} width={50} alt="Share on Twitter" />
        </a>
        <a href={`https://plus.google.com/share?url=${url}`} target='_blank' rel='noreferrer'>
          <img src={assets.googleplus_icon} width={50} alt="Share on Google+" />
        </a>
      </div>
    </div>
  )
}

export default ShareButtons
