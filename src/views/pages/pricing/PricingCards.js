import classnames from 'classnames'
import { Row, Col, Card, CardBody, CardText, Badge, ListGroup, ListGroupItem, Button } from 'reactstrap'

const PricingCards = ({ data, duration }) => {
  const renderPricingCards = () => {
    return data.map((item, index) => {
      const monthlyPrice = duration === 'yearly' ? item.price : item.price,
        yearlyPrice = duration === 'yearly' ? item.price : item.price,
        imgClasses = item.name === 'Basic' ? 'mb-2 mt-5' : item.name === 'Standard' ? 'mb-2 mt-5' : 'mb-2 mt-5'
      return (
        <Col key={index} md='4' xs='12'>
          <Card
            className={classnames('text-center', {
              [`${item.name.toLowerCase()}-pricing`]: item.name
            })}
          >
            <CardBody>
              {/* {item.popular === true ? (
                <div className='pricing-badge text-right'>
                  <Badge color='light-primary' pill>
                    Popular
                  </Badge>
                </div>
              ) : null} */}

              <img className={imgClasses} src={item.img} alt='pricing svg' />

              <h3>{item.name}</h3>
              <CardText>{item.desc}</CardText>
              <div className='annual-plan'>
                <div className='plan-price mt-2'>
                  <sup className='font-medium-1 font-weight-bold text-primary mr-25'>$</sup>
                  <span className={`pricing-${item.name.toLowerCase()}-value font-weight-bolder text-primary`}>
                    {monthlyPrice}
                  </span>
                  <span className='pricing-duration text-body font-medium-1 font-weight-bold ml-25'>/month</span>
                </div>
                {item.name !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null}
              </div>
              <ListGroup tag='ul' className='list-group-circle text-left mb-2'>
                {item.features.map((feature, i) => (
                  <ListGroupItem key={i} tag='li'>
                    {feature}
                  </ListGroupItem>
                ))}
              </ListGroup>
              <Button.Ripple
                color={item.name === 'Basic' ? 'success' : 'primary'}
                outline={item.name !== 'Standard'}
                block
              >
                {item.name === 'Basic' ? 'Your current plan' : 'Upgrade'}
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Row className='pricing-card'>
      <Col className='mx-auto' sm={{ offset: 2, size: 10 }} lg={{ offset: 2, size: 10 }} md='12'>
        <Row>{renderPricingCards()}</Row>
      </Col>
    </Row>
  )
}

export default PricingCards
