import React from 'react'
import { BiArrowBack, BiFilter } from 'react-icons/bi';
import { createBrowserHistory } from "history";

export default function Header(props) {
  const history = createBrowserHistory();
  return (
    <div className="
      text-4xl
      sm:text-5xl
      bottomeNav 
      col-start-1 
      col-end-7 
      py-5 
      bg-white
    ">
      <div className="flex justify-between px-5">
        <div>
          <div onClick={history.goBack}><BiArrowBack /></div>
        </div>
        <h3>{props.title || 'Mila Shop'}</h3>
        <div>
          {
            props.filter 
            ?
              <BiFilter />
            :
              <></>
          }
        </div>
      </div>
    </div>
  )
}
