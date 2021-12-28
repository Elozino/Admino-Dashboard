import React from 'react'
import './widgetlg.css'
import Img from '../Topbar/download.jpg'

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Admino Project</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Project Clone</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Alan Project</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">React Native Learning</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
