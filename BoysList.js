import React, { Component } from 'react'
import BoysCard from './BoysCard'

export default class BoysList extends Component {
    
    boysDetails = [
        {
            'id' : 1,
            'ImageUrl' : 'https://assets.entrepreneur.com/content/3x2/2000/20190923115022-Untitleddesign9.jpeg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 2,
            'ImageUrl' : 'https://wallpaperaccess.com/full/2499088.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },
        {
            'id' : 3,
            'ImageUrl' : 'data:image/jpeg;base64,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',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Sikh'
        },
        {
            'id' : 4,
            'ImageUrl' : 'https://loveshayariimages.in/wp-content/uploads/2022/05/Whatsapp-dp-for-Stylish-boys-Wallpaper-Download-2.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },
        {
            'id' : 5,
            'ImageUrl' : 'https://c0.wallpaperflare.com/preview/797/985/316/i-can-see-new-man-photographer.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 6,
            'Name' : 'Unkown',
            'ImageUrl' : 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWV8ZW58MHx8MHx8&w=1000&q=80',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 7,
            'Name' : 'Unkown',
            'Age' : 20,
            'ImageUrl' : 'https://www.biofamous.com/wp-content/uploads/triggered-Insaan-800x490.jpg',
            'qualification' : 'B.Tech',
            'Religion' : 'Sikh'
        },
        {
            'id' : 8,
            'Name' : 'Unkown',
            'ImageUrl' : 'https://i0.wp.com/wikiwiki.in/wp-content/uploads/2021/07/Joginder-Yadav-Thara-Bhai-Joginder-2.jpg?resize=761.25%2C428&ssl=1',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Parsi'
        },
        {
            'id' : 9,
            'ImageUrl' : 'https://images.hindustantimes.com/img/2022/09/17/550x309/ANI-20220826134-0_1663410382636_1663410382636_1663410394670_1663410394670.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },
        {
            'id' : 10,
            'ImageUrl' : 'https://cutepics.net/wp-content/uploads/2021/09/beard-man-handsome-and-manly-wallpaper-for-phones-1-430x300.jpg,',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },{
            'id' : 11,
            'ImageUrl' : 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/HD-New-Smart-Boy-Dp-for-Whatsapp-Pics-Images-Download.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },
        {
            'id' : 12,
            'ImageUrl' : 'https://images.hindustantimes.com/img/2022/09/17/550x309/ANI-20220826134-0_1663410382636_1663410382636_1663410394670_1663410394670.jpg',
            'Name' : 'Unkown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Muslim'
        },
        
    ]

    constructor(props){
        super(props)
        this.state = {
            boysDetails : this.boysDetails
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <div className="row">
            {this.state.boysDetails.map((Element)=>{
                return <div className='col-md-4 my-3' key={Element.id}> 
                <BoysCard Name = {Element.Name} age = {Element.Age} religion = {Element.Religion} imageurl = {Element.ImageUrl }
                ></BoysCard>
                </div>
            })}
        </div>
      </div>
    )
  }
}
