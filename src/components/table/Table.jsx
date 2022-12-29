import React, {useState} from 'react'
import './table.css'

export default function Table(props) {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, props.limit) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currPage, setCurrPage] = useState(0)
    
    let pages = 1;
    let range = [];

    if(props.limit !== undefined){
        let page = Math.floor(props.bodyData.length / props.limit);
        pages = props.bodyData.length & props.limit === 0 ? page : page + 1; //get absolute values for the pages without leaving anything out
        range = [...Array(pages).keys()] // make an array with the pages and attach keys to it
    }

    const selectPage = page => {
        const start = props.limit * page
        const end = start + props.limit

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page+1)
    }

  return (
    <div className='table-wrapper'>
    <table>
    {
        props.headData && props.renderHead ? (
            <thead>
                <tr>
                    {
                        props.headData.map((item, index) => props.renderHead(item, index))
                    }
                </tr>
            </thead>
        ) : null
    }
    {
        props.bodyData && props.renderBody ? (
            <tbody>
                {
                    dataShow.map((item, index) => props.renderBody(item, index))
                }
            </tbody>
        ) : null
    }
</table>
<div className="table__pagination">
    { pages > 1 ?
        range.map((item, index)=>(
            <div key={index} className={`table__pagination-item ${currPage === index + 1 ? 'active' : ''}`} onClick={()=>selectPage(index)}>
                {item+1}
            </div>
        )) : null
    }
</div>
    </div>
  )
}
