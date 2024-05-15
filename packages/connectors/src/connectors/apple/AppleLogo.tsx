import React from 'react'

import { LogoProps } from '../../types'

interface GetAppleLogo {
  isDarkMode: boolean
}

export const getAppleLogo = ({ isDarkMode }: GetAppleLogo) => {
  const fillColor = isDarkMode ? 'white' : 'black'

  const AppleLogo: React.FunctionComponent = (props: LogoProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 34" fill="none" {...props}>
        <path
          d="M27.702 11.5918C27.5049 11.7448 24.0243 13.7068 24.0243 18.0694C24.0243 23.1155 28.4532 24.9007 28.5858 24.9449C28.5654 25.0537 27.8822 27.3897 26.2506 29.77C24.7958 31.8646 23.2765 33.9558 20.9651 33.9558C18.6538 33.9558 18.0589 32.6127 15.3907 32.6127C12.7904 32.6127 11.8659 34 9.75169 34C7.63748 34 6.1623 32.0618 4.46618 29.6816C2.50154 26.8865 0.914185 22.5443 0.914185 18.423C0.914185 11.8128 5.21057 8.30703 9.43897 8.30703C11.6857 8.30703 13.5586 9.78278 14.9692 9.78278C16.3118 9.78278 18.4056 8.21862 20.9617 8.21862C21.9304 8.21862 25.4111 8.30703 27.702 11.5918ZM19.7483 5.42014C20.8054 4.16542 21.5532 2.42444 21.5532 0.683468C21.5532 0.442044 21.5328 0.19722 21.4886 0C19.7687 0.0646065 17.7224 1.14591 16.4886 2.57746C15.5199 3.67917 14.6157 5.42014 14.6157 7.18492C14.6157 7.45014 14.6599 7.71537 14.6803 7.80038C14.7891 7.82078 14.9658 7.84458 15.1426 7.84458C16.6857 7.84458 18.6266 6.81088 19.7483 5.42014Z"
          fill={fillColor}
        />
      </svg>
    )
  }
  return AppleLogo
}

interface GetAppleMonochromeLogo {
  isDarkMode: boolean
}

export const getAppleMonochromeLogo = ({ isDarkMode }: GetAppleMonochromeLogo) => {
  const fillColor = isDarkMode ? '#FFFFFF' : '#000000'

  const AppleOtcLogo: React.FunctionComponent = (props: LogoProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none" {...props}>
        <path
          d="M27.166 20.8774C27.1338 17.335 30.0617 15.633 30.1936 15.5493C28.5463 13.1395 25.9852 12.8113 25.0714 12.7727C22.8932 12.5507 20.8179 14.0565 19.7111 14.0565C18.6043 14.0565 16.8991 12.8049 15.0909 12.8403C12.7131 12.8757 10.5221 14.2205 9.2962 16.3505C6.8284 20.6297 8.66557 26.9777 11.0722 30.4557C12.2498 32.1545 13.6494 34.0689 15.493 33.9981C17.2691 33.9273 17.9383 32.8495 20.0811 32.8495C22.224 32.8495 22.8289 33.9981 24.7014 33.9627C26.6094 33.9241 27.8191 32.2253 28.9871 30.5201C30.3352 28.5478 30.8918 26.6366 30.924 26.5369C30.8822 26.5208 27.2046 25.1116 27.166 20.8774Z"
          fill={fillColor}
        />
        <path
          d="M23.6429 10.4722C24.621 9.28822 25.2806 7.64089 25.1004 6C23.6911 6.05791 21.9859 6.93949 20.9756 8.12351C20.0715 9.16917 19.2768 10.8455 19.4923 12.4542C21.0592 12.5764 22.6648 11.653 23.6429 10.4722Z"
          fill={fillColor}
        />
      </svg>
    )
  }

  return AppleOtcLogo
}
