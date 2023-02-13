import React, { Component } from 'react'
import FemaleCards from './FemaleCards'

export default class GirlList extends Component {
    girlDetails = [
        {
            'id' : 1,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://images.hindustantimes.com/img/2022/10/10/1600x900/Urvashi_Rautela_1665372351207_1665372403784_1665372403784.jpg',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 2,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/sgmcta2wxcyd5dkg_1612252380.jpeg',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 3,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkP2JYbpW69hvBFl_MxE0Qx9yIerW8fZI5kg&usqp=CAU',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 4,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://image.winudf.com/v2/image1/Y29tLmxhdGVzdC5wYWtpc3RhbmlnaXJsc19zY3JlZW5fNF8xNTc5MDc2Mzk4XzAyMA/screen-4.jpg?fakeurl=1&type=.jpg',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 5,
            'ImageUrl' : 'https://1.bp.blogspot.com/-3AI0mX78ZKE/XURWLnOs4FI/AAAAAAAABAA/FahCMvmF1aQzrlW5qHjIDBiUL7O44CKnACLcBGAs/s400/beautiful-Girls-DP-for-WhatsApp.jpg',
            'Name' : 'Unknown',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 6,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://www.whatsappimages.in/wp-content/uploads/2022/05/dp-for-girls-attitude.jpg',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 7,
            'Name' : 'Unknown',
            'ImageUrl' : 'http://www.techenter.in/wp-content/uploads/2022/04/girls-dp-for-fb-46.webp',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 8,
            'Name' : 'Unknown',
            'Age' : 20,
            'ImageUrl' : 'https://ienglishstatus.com/wp-content/uploads/2022/04/Girls-Beautiful-DP.jpg',
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 9,
            'Name' : 'Unknown',
            'Age' : 20,
            'ImageUrl' : 'https://starsunfolded.com/wp-content/uploads/2018/10/Tania-Picture.jpg',
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        }
        ,

        {
            'id' : 10,
            'Name' : 'Unknown',
            'ImageUrl' : 'https://www.filemywap.in/wp-content/uploads/2022/07/Picsart_22-07-15_22-19-40-513_compress90.jpg',
            'Age' : 20,
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 11,
            'Name' : 'Unknown',
            'Age' : 20,
            'ImageUrl' : 'https://radhakrishnaimages.in/wp-content/uploads/2021/11/Latest-Beautiful-Girl-Whatsapp-Dp-Images-pictures-photo.jpg',
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        },
        {
            'id' : 12,
            'Name' : 'Unknown',
            'Age' : 20,
            'ImageUrl' : 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/08/girls-images-1.jpg',
            'qualification' : 'B.Tech',
            'Religion' : 'Hindu'
        }
    ]

    constructor(props){
        super(props);
        this.state = {
            girlDetails : this.girlDetails 
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <div className="row">
            {this.state.girlDetails.map((Element)=>{
                return <div className='col-md-4 my-3' key={Element.id}> 
                <FemaleCards Name = {Element.Name} age = {Element.Age} religion = {Element.Religion} imageurl = {Element.ImageUrl}
                ></FemaleCards>
                </div>
            })}
        </div>
      </div>
    )
  }
}
