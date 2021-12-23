import React from "react";
import StarFilled from "../../assets/StarFilled.png"
import StarEmpty from "../../assets/StarEmpty.png"

export default function AddReview(props) {

  const [rating, setRating] = React.useState(0)
  const [recommend, setRecommend] = React.useState()
  const [size, setSize] = React.useState()
  const [width, setWidth] = React.useState()
  const [comfort, setComfort] = React.useState()
  const [quality, setQuality] = React.useState()
  const [length, setLength] = React.useState()
  const [fit, setFit] = React.useState()
  const [summary, setSummary] = React.useState('')
  const [body, setBody] = React.useState('')


  function textRating(rating) {
    if (rating === 1) {
      return <>Poor</>
    }
    if (rating === 2) {
      return <>Fair</>
    }
    if (rating === 3) {
      return <>Average</>
    }
    if (rating === 4) {
      return <>Good</>
    }
    if (rating === 5) {
      return <>Great</>
    }
  }

  console.log(props.productMeta)

  return (
    <div>
      <div className="modal fade" id="addReview" tabIndex="-1" role="dialog" aria-labelledby="addReviewLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addReviewLabel">Write your review about {props.selected.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group d-flex align-items-center">
                  <label className="col-form-label pe-2">Overall Rating*</label>
                  <img src={rating >= 1 ? StarFilled : StarEmpty} width="20px" height="20px" className="cP" onClick={() => setRating(1)}></img>
                  <img src={rating >= 2 ? StarFilled : StarEmpty} width="20px" height="20px" className="cP" onClick={() => setRating(2)}></img>
                  <img src={rating >= 3 ? StarFilled : StarEmpty} width="20px" height="20px" className="cP" onClick={() => setRating(3)}></img>
                  <img src={rating >= 4 ? StarFilled : StarEmpty} width="20px" height="20px" className="cP" onClick={() => setRating(4)}></img>
                  <img src={rating >= 5 ? StarFilled : StarEmpty} width="20px" height="20px" className="cP me-1" onClick={() => setRating(5)}></img>
                  {textRating(rating)}
                </div>
                <div className="form-group">
                  <label htmlFor="recommend" className="col-form-label pe-2">Do you recommend this product?*</label>
                  <div className="form-check form-check-inline" onClick={() => setRecommend(true)}>
                    <input className="form-check-input" type="radio" id="recommend" name="recommended" value="true"></input>
                    <label className="form-check-label" htmlFor="recommend">True</label>
                  </div>
                  <div className="form-check form-check-inline" onClick={() => setRecommend(false)}>
                    <input className="form-check-input" type="radio" id="recommend2" name="recommended" value="false"></input>
                    <label className="form-check-label" htmlFor="recommend2">False</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="recommend" className="col-form-label">Product Characteristics*</label>
                  {props.productMeta.characteristics.Size &&
                  <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="size" value="1" onClick={() => setSize(1)}></input>
                      A size too small
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="size" value="2" onClick={() => setSize(2)}></input>
                      1/2 size too small
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="size" value="3" onClick={() => setSize(3)}></input>
                      Perfect
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="size" value="4" onClick={() => setSize(4)}></input>
                      1/2 size too big
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="size" value="5" onClick={() => setSize(5)}></input>
                      A size too big
                    </label>
                  </div>
                  }
                  {props.productMeta.characteristics.Width &&
                    <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="width" value="1" onClick={() => setWidth(1)}></input>
                      Too narrow
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="width" value="2" onClick={() => setWidth(2)}></input>
                      Slightly narrow
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="width" value="3" onClick={() => setWidth(3)}></input>
                      Perfect
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="width" value="4" onClick={() => setWidth(4)}></input>
                      Slightly wide
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="width" value="5" onClick={() => setWidth(5)}></input>
                      Too wide
                    </label>
                  </div>
                  }
                  {props.productMeta.characteristics.Comfort &&
                    <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="comfort" value="1" onClick={() => setComfort(1)}></input>
                      Uncomfortable
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="comfort" value="2" onClick={() => setComfort(2)}></input>
                      Slightly uncomfortable
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="comfort" value="3" onClick={() => setComfort(3)}></input>
                      Ok
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="comfort" value="4" onClick={() => setComfort(4)}></input>
                      Comfortable
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="comfort" value="5" onClick={() => setComfort(5)}></input>
                      Perfect
                    </label>
                  </div>
                  }
                  {props.productMeta.characteristics.Quality &&
                    <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="quality" value="1" onClick={() => setQuality(1)}></input>
                      Poor
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="quality" value="2" onClick={() => setQuality(2)}></input>
                      Below Average
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="quality" value="3" onClick={() => setQuality(3)}></input>
                      What I Expected
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="quality" value="4" onClick={() => setQuality(4)}></input>
                      Pretty Great
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="quality" value="5" onClick={() => setQuality(5)}></input>
                      Perfect
                    </label>
                  </div>
                  }
                  {props.productMeta.characteristics.Length &&
                    <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="length" value="1" onClick={() => setLength(1)}></input>
                      Runs Short
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="length" value="2" onClick={() => setLength(2)}></input>
                      Runs Slightly Short
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="length" value="3" onClick={() => setLength(3)}></input>
                      Perfect
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="length" value="4" onClick={() => setLength(4)}></input>
                      Runs Slightly Long
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="length" value="5" onClick={() => setLength(5)}></input>
                      Runs Long
                    </label>
                  </div>
                  }
                  {props.productMeta.characteristics.Fit &&
                    <div className="pt-3 d-flex justify-content-between">
                    <label className="radio-label-vertical">
                      <input type="radio" name="fit" value="1" onClick={() => setFit(1)}></input>
                      Runs Tight
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="fit" value="2" onClick={() => setFit(2)}></input>
                      Runs Slightly Tight
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="fit" value="3" onClick={() => setFit(3)}></input>
                      Perfect
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="fit" value="4" onClick={() => setFit(4)}></input>
                      Runs Slightly Long
                    </label>
                    <label className="radio-label-vertical">
                      <input type="radio" name="fit" value="5" onClick={() => setFit(5)}></input>
                      Runs Long
                    </label>
                  </div>
                }
                </div>
                <div className="form-group pt-4">
                  <label htmlFor="summary-text" className="col-form-label">Review Summary:</label>
                  <textarea className="form-control" id="summary-text" maxLength={60} onChange={(e) => setSummary(e.target.value)} placeholder="Example: Best Purchase Ever!"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="Body-text" className="col-form-label">Review Body*:</label>
                  <textarea className="form-control" id="Body-text" minLength={50} onChange={(e) => setBody(e.target.value)} placeholder="Why did you like the product or not?"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}