// ** React Imports
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

// ** Custom Components
import NumberInput from '@components/number-input'

const Cart = props => {
  // ** Props
  const { selectedPlan, products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

  const [month, setMonth] = useState(1)
  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to toggle wishlist item
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getCartItems())
  }

  // ** Render cart items
  const renderCart = () => {
    return products.map(item => {
      return (
        <Card key={item.name} className='ecommerce-card'>
          <div className='item-img'>
            <Link to={`/apps/ecommerce/product/${item.slug}`}>
              <img className='img-fluid' src={item.image} alt={item.name} />
            </Link>
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <Link to={`/apps/ecommerce/product/${item.slug}`}>{item.name}</Link>
              </h6>
              <span className='item-company'>
                By
                <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
                  {item.brand}
                </a>
              </span>
              <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item mr-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <span className='text-success mb-1'>In Stock</span>
            <div className='item-quantity'>
              <span className='quantity-title mr-50'>Qty</span>
              <NumberInput value={item.qty} min={1} max={10} size='sm' style={{ width: '7rem', height: '2.15rem' }} />
            </div>
            <div className='delivery-date text-muted'>Delivery by, {formatDate(item.shippingDate)}</div>
            <span className='text-success'>
              20% off for subscription 6 months and above offers Available
            </span>
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'>${item.price}</h4>
                {item.hasFreeShipping ? (
                  <CardText className='shipping'>
                    <Badge color='light-success' pill>
                      Free Shipping
                    </Badge>
                  </CardText>
                ) : null}
              </div>
            </div>
            <Button className='mt-1 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.id))}>
              <X size={14} className='mr-25' />
              <span>Remove</span>
            </Button>
            <Button
              className='btn-cart'
              color='primary'
              onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
            >
              <Heart
                size={14}
                className={classnames('mr-25', {
                  'fill-current': item.isInWishlist
                })}
              />
              <span className='text-truncate'>Wishlist</span>
            </Button>
          </div>
        </Card>
      )
    })
  }
  const renderPlan = () => {
    return (
      <Card className='ecommerce-card'>
          <div className='item-img'>
            <Link to={`/apps/ecommerce/product/${selectedPlan.name}`}>
              <img className='img-fluid' src={selectedPlan.name} alt={selectedPlan.name} />
            </Link>
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <Link to={`/apps/ecommerce/product/${selectedPlan.name}`}>{selectedPlan.name}</Link>
              </h6>
              <span className='item-company'>
                <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
                  {selectedPlan.desc}
                </a>
              </span>
            
            </div>
            <ul className='mt-1'>
              { selectedPlan.features.map((f, index) => <li key={index} className='text-success mb-1'>{f}</li>)}
            </ul>
           
            <div className='item-quantity'>
              <span className='quantity-title mr-50'>Months</span>
              <NumberInput value={month} onChange={month => setMonth(month)} min={1} max={12} size='sm' style={{ width: '7rem', height: '2.15rem' }} />
            </div>
            {/* <div className='delivery-date text-muted'>Delivery by, {formatDate(selectedPlan.name)}</div> */}
            <span className='text-success mt-1'>
            20% off for subscription 6 months and above offers Available
            </span>
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'>${selectedPlan.price} Monthly</h4>
              </div>
            </div>
            <Button className='mt-1 remove-wishlist' color='light' 
             tag={Link}
             to={`/apps/subscription/pricing`}
             >
              <X size={14} className='mr-25' />
              <span>Cancel Subscribe</span>
            </Button>
           
          </div>
        </Card>
      
    )
  }

  return (
    <div className='list-view product-checkout'>
      {/* <div className='checkout-items'>{products.length ? renderCart() : <h4>Your cart is empty</h4>}</div> */}
      <div className='checkout-items'>{selectedPlan ? renderPlan() : <h4>No plan has been selected</h4>}</div>
      <div className='checkout-options'>
        <Card>
          <CardBody>
            <label className='section-label mb-1'>Options</label>
            <InputGroup className='input-group-merge coupons'>
              <Input placeholder='Coupons' />
              <InputGroupAddon addonType='append'>
                <InputGroupText className='text-primary'>Apply</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <hr />
            <div className='price-details'>
              <h6 className='price-title'>Price Details</h6>
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Unit Price</div>
                  <div className='detail-amt'>{selectedPlan.price}</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Subscribe Months</div>
                  <div className='detail-amt discount-amt text-success'>{month}</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Sub Total</div>
                  <div className='detail-amt'> {selectedPlan.price * month} </div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>GOV Tax</div>
                  <div className='detail-amt'> {(selectedPlan.price * month) * 0.05} </div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt font-weight-bolder'>{(selectedPlan.price * month) + (selectedPlan.price * month * 0.05)} </div>
                </li>
              </ul>
              <Button.Ripple
                color='primary'
                classnames='btn-next place-order'
                block
                disabled={!products.length}
                onClick={() => stepper.next()}
              >
                Place Order
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart
