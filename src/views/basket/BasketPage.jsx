import { useContext, useEffect, useMemo } from 'react';
import { BasketContext } from '../../context/basketContext';
import { FaHourglassEnd } from "react-icons/fa";
import { PaymentMethods, BasketItem, CheckoutSummary } from '../../components/common';

const BasketPage = () => {
  const { 
    basket, 
    clearBasket, 
    dispatch: basketDispatch, 
    getCheckoutTotal,
    checkoutTotal,
    setCheckoutAll,
    unsetCheckoutAll, 
    checkoutAll
  } = useContext(BasketContext);

  const checkallHandler = (event) => {
    if (event.target.checked) {
      setCheckoutAll(basketDispatch);
    } else {
      unsetCheckoutAll(basketDispatch);
    }
  };

  useEffect(() => {
    getCheckoutTotal(basketDispatch);
  }, [basket, basketDispatch]);

  const totalItemCount = useMemo(() => {
    return basket.reduce((total, item) => total + item.quantity, 0);
  }, [basket]);

  if (basket.length === 0) {
    return (
      <main className='bg-secondary'>
        <div className='container'>
          <div className="sc-wrapper py-4 flex align-center justify-center text-white">
            <FaHourglassEnd color='white' />
            <h3 className='mx-2'>No items found in the cart.</h3>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-wrapper'>
          <div className='basket grid'>
            {/* basket left */}
            <div className='basket-l py-4'>
              <div className='basket-top bg-white py-3 px-4'>
                <h2>Shopping Cart <span className='text-primary text-white'>({totalItemCount})</span></h2>

                <div className='flex align-center justify-between'>
                  <div className='checkbox-item flex py-3'>
                    <div className='checkbox-icon flex align-center'>
                      <input type="checkbox" className='form-control' id="checkall" onChange={checkallHandler} checked={checkoutAll} />
                    </div>
                    <p className='form-text'>Select all items</p>
                  </div>
                  <button type="button" className='fw-7 fs-16 text-primary text-white' onClick={() => clearBasket(basketDispatch)}>Delete Item</button>
                </div>
              </div>

              <div className='basket-list bg-white my-3'>
                {
                  basket.map(basketItem => (
                    <BasketItem item={basketItem} key={basketItem.id} />
                  ))
                }
              </div>
            </div>
            {/* basket right */}
            <div className='basket-r py-4'>
              <CheckoutSummary checkoutCount={totalItemCount} checkoutTotal={Number(checkoutTotal)} />
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BasketPage;
