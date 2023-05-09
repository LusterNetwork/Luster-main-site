import React from 'react'

const TeamInfo = ({content}) => {

    const Educator = [
        <div className='m-0 text-lg'>  Training Director and Blockchain Trainer at <div className='flex font-semibold'>BYJUS Future School <img src='/assets/backbone/byjus.png' alt="byjus logo" className='ml-3 h-8 w-8' /> </div></div>,
        <p className='m-0 text-lg'>  Educator at Blockchain Council</p>,
        <p className='m-0 text-lg'>  Educator at Simplilearn</p>,
        <p className='m-0 text-lg'>  Blockchain (Ethereum, Hyperledger) Web3 | Solidity</p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -GLA University</p>,
        <p className='m-0 text-lg'>  <b>M.Tech</b> -SMU Gangtok</p>,
        
    ]
    const Mentor = [
        <div className='m-0 flex text-lg'>  Blockchain Code Developer at Quantiphi </div>,
        <div className='m-0 flex text-lg'>  Teach Lead at Luster network</div>,
        <div className='m-0 flex text-lg'>  Blockchain (Ethereum | Hyperledger) </div>,
        <div className='m-0 flex text-lg'>  DevOps (AWS | GCP | Docker | K8's) </div>,
        <p className='m-0 text-lg'> <a href="https://www.youtube.com/@AkshayKurhekar" target="_blank"> Youtuber (Blockchain With Akshay Kurhekar)</a></p>,
        <p className='m-0 text-lg'> <a href="https://dev.to/akshaykurhekar" target="_blank"> Blockchain Content Creater : Dev Community</a></p>,
    ]
    const Counsellor = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Placementcell = [
        <p className='m-0 flex text-lg'>  <b>Founder - LUSTER Network</b></p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -IIIT Nagpur</p>,
    ]

    if (content === 'Educator')
    {
        return Educator.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div>{item}</div>
    </div>)
    }
    else if (content === 'Mentor')
    {
        return Mentor.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div>{item}</div>
    </div>)
    }
    else if (content === 'Counsellor')
    {
        return Counsellor.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div>{item}</div>
    </div>)
    }
    else
    {
        return Placementcell.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div>{item}</div>
    </div>)
    }


}

export default TeamInfo;