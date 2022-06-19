import React from "react";
import { Link } from "react-router-dom";
import '../../css files/Item.css';



const NewBookItem = props => {




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
            <Link to={`/book?book_title=${props.title}`}><div>상세보기</div></Link>
        </dd>
      </dl>
    </li>
</>
  );
};

export default NewBookItem;