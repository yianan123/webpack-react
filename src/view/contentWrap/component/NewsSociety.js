import React from 'react'
import { List } from 'antd-mobile';
import './style.scss'

const Item = List.Item;
// const Brief = Item.Brief;
class NewsSociety extends React.Component {
    getTime(timp){
        var date = new Date(timp*1000)
        let  [year,month,day] = [date.getFullYear(),date.getMonth()+1,date.getDate()].map(e=>e<10?'0'+e:e)
        return  [year,month,day].join('-')
    }
    shouldComponentUpdate(nextProps,nextStates){
        return !(nextProps.dataList.length=== this.props.dataList.length)
    }
    render() {
        let { dataList } = this.props
        console.log(dataList)
        return (
            <List className="my-list" style={{position:'relative'}}>
                {
                    dataList.map(e => {
                        let { title, middle_image, image_list,article_url,source ,publish_time} = e
                        let time = this.getTime(publish_time)
                        if (middle_image && !image_list) {
                            return (
                                <Item wrap onClick={() => this.props.clickFun(article_url)} extra={<img style={{ width: '100%', height: 'auto' }} src={middle_image.url.replace('webp', 'jpg') || ''} alt={''} />} key={e.item_id}><span style={{ fontSize: '14px' }}>{title}</span>
                                    <div className='pushInfo'>
                                        <span className='source'>{source}</span>
                                        <span className='time'>{time}</span>
                                    </div>
                                </Item>)
                        } else if (image_list && image_list.length) {
                            return (
                                <Item   onClick={()=>this.props.clickFun(article_url)} wrap key={e.item_id}>
                                    <span style={{ fontSize: '14px' }}>{title}</span>
                                    <ul className='imageList'>
                                        {image_list.map((img, index) => (<li key={index}><img src={img.url.replace('webp','jpg')} alt={''} /></li>))}
                                    </ul>
                                    <div className='pushInfo'>
                                        <span className='source'>{source}</span>
                                        <span className='time'>{time}</span>
                                    </div>
                                </Item>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </List>

        )
    }
}
export default NewsSociety
