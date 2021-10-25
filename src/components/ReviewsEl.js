export default function ReviewsEl( {reviews} ){
    return(
        <ul>
            {reviews.map( review =>(
                <li key={review.id}>
                    <h1>Author: {review.author}</h1>
                    <p>{review.content}</p>
                </li>
                )
                )}
        </ul>
    )
}