import React from 'react'
import './footer.scss'
import {withRouter} from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'


const ItemIcon = (props) => {
    return ( < div style = {{ width: '22px', height: '22px',background:`url(${props.iconUrl}) center center/21px 21px no-repeat`}} > </div>)
}
@withRouter
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ''
        };
    }
    componentWillMount(){
        let {pathname} = this.props.location
        console.log(pathname)
        let t = this.props.tableList.filter(e=>e.path===pathname)
        t.length&&this.setState({selectedTab:t[0].name})
    }
    handlerTabClick(item){
        let {path,name} = item 
        this.setState({selectedTab:name})
        this.props.history.replace(path)
    }
    render() {
        var list = this.props.tableList
        return (
            <div className='footer'>
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                    {list.map((item, index) => (
                        <TabBar.Item
                            title={item.name}
                            key={index}
                            icon={< ItemIcon iconUrl = { item.iconUrl} />}
                            selectedIcon={< ItemIcon iconUrl = { item.checkIconUrl} />}
                            selected={this.state.selectedTab===item.name}
                            onPress={this.handlerTabClick.bind(this,item)}>
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}
Footer.propTypes ={
    tableList:PropTypes.array
}
export default Footer