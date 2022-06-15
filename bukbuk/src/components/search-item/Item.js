import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../css files/Item.css';
import Books from './Books';


const Item = props => {

  async function bookData (){
    axios.get('')
    .then(res=>console.log(res.data))
  }


  // console.log(props)
  return (
    <>
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} />
        </dt>
        <dd>
          <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
          <p>{props.bookname}</p>
          <h4>{props.authors}</h4> {/*추후 css 스타일링 */}
          <article dangerouslySetInnerHTML={{ __html: props.contents }} />
          {/* <Link to={'/book/description'}>
            <div className="description-button">상세보기</div>
            </Link> */}
            {/* <a href={props.url}>상세보기</a> */}
            <div onClick={bookData}>상세보기</div>
        </dd>
      </dl>
    </li>
</>
  );
};

export default Item;