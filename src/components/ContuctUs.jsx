import React from 'react'

function ContuctUs () {
  return (
    <div className="site-section bg-light" id="section-contact">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Оставьте Сообщение</h2>
            <p className="color-black-opacity-5">Инжиниринг и Типография ежедневно и в любое время суток</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mb-5">

            

            <form action="#" className="p-5 bg-white">
             

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">Имя</label>
                  <input type="text" id="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Фамилия</label>
                  <input type="text" id="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Электронный Адрес</label> 
                  <input type="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="subject">Тема</label> 
                  <input type="subject" id="subject" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Сообщение</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Отправить" className="btn btn-primary py-2 px-4 text-white"/>
                </div>
              </div>

  
            </form>
          </div>
          <div className="col-md-5">
            
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Адрес</p>
              <p className="mb-4"> ул.Монтажная, д.9, стр1 г.Москва</p>

              <p className="mb-0 font-weight-bold">Телефон</p>
              <p className="mb-4"><a href="tel:+74951375273">+7 (495) 137-52-73</a></p>

              <p className="mb-0 font-weight-bold">Наш Электронный Адрес</p>
              <p className="mb-0"><a href="mailto:a5grupp@list.ru">a5grupp@list.ru</a></p>

            </div>
            
            <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">Как нас найти:</h3>
              <p>Ближайшие станции метро: Щелковская, Бульвар Рокоссовского, Локомотив. <br/>
               Проезд: станция метро «Бульвар Рокоссовского, автобус 3 , проезд до остановки "Магазин Техносила".
              </p>
              <p><a href="#" className="btn btn-primary px-4 py-2 text-white">На страницу контактов</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContuctUs