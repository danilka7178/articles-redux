import { CardColumns, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function Articles() {
   const { articles } = useSelector(state => state);

   return (
      <CardColumns className="articles">{
         articles.length ? articles.map((article) => {
            return (
               <Card key={article.id}>
                  <Card.Img variant="top" src={article.image} />
                  <Card.Body>
                     <Card.Title>{article.title}</Card.Title>
                     <Card.Text>
                        {article.text}
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <small className="text-muted">{article.date}</small>
                  </Card.Footer>
               </Card>
            )
         }) : < h3 > Постов нет...</h3 >}
      </CardColumns>
   )
};

export default Articles;