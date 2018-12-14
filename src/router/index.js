import React from 'react'
import { HashRouter as Router,Route} from 'react-router-dom'
import Footer from '../components/Footer'
import tableList from './config'
class RouterAll extends React.Component{
  render(){
      return(
        <Router>
            <>
                <div style={{paddingBottom:40+'px',background:'#f2f2f2'}}>
                    {
                        tableList.map((e,index)=><Route  exact path={e.path} key={index} component={e.component} />)
                    }
                </div>
                <Footer  tableList ={tableList} />        
            </>
        </Router>
      )
  }  
}

export default  RouterAll;