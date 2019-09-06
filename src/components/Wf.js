import React, { Component } from 'react';

export default class Wf extends Component {
  render() {
    const {context} = this.props,
          state = context.state;

    let width = 'Общая ширина: ' + state.width + 'мм';
    let height = 'Общая высота: ' + state.height + 'мм';

    let typeWindow = '';
    let typeFrame1 = '';
    let typeFrame2 = '';
    let typeFrame3 = '';
    let mosquitoFrame1 = '';
    let mosquitoFrame2 = '';
    let mosquitoFrame3 = '';

    let widthFrame1 = '';
    let widthFrame2 = '';
    let widthFrame3 = '';
    let heightWindow = '';
    let heightDoor = '';

    heightWindow = 'Высота окна: ' + state.height_wind + 'мм';
    if ( state.frame__1__type === 'door' || state.frame__2__type === 'door' || state.frame__3__type === 'door' ) {
        heightDoor = 'Высота двери: ' + state.height_door + 'мм';
    }

    if ( state.winds === 1 ) {
        if ( state.frame__1__type === 'window' ) {
            typeWindow = 'Одностворчатое окно.';

            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип створки: глухая.';
            }
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип створки: откидная.';
            }

            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип створки: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип створки: поворотная влево/откидная.';
            }

            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип створки: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип створки: поворотная вправо/откидная.';
            }
            if ( state.frame__1__mosquito ) {
                mosquitoFrame1 = 'Москитная сетка: да.';
            } else {
                mosquitoFrame1 = 'Москитная сетка: нет.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            typeWindow = 'Дверь';
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: глухая.';
            }
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: откидная.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        widthFrame1 = 'Ширина окна: ' + state.frame__1__width + 'мм';
    }

    if ( state.winds === 2 ) {
        if ( state.frame__1__type === 'window' && state.frame__2__type === 'window' ) {
            typeWindow = 'Двухстворчатое окно.';
        }
        if ( state.frame__1__type === 'window' ) {
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: глухая.';
            }
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: откидная.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: поворотная влево/откидная.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__1__mosquito ) {
                mosquitoFrame1 = 'Москитная сетка 1 створки: да.';
            } else {
                mosquitoFrame1 = 'Москитная сетка 1 створки: нет.';
            }
        }
        if ( state.frame__2__type === 'window' ) {
            if ( state.frame__2__horizontal_name === 'none' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: глухая.';
            }
            if ( state.frame__2__horizontal_name === 'none' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: откидная.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: поворотная влево.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: поворотная влево/откидная.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: поворотная вправо.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__2__mosquito ) {
                mosquitoFrame2 = 'Москитная сетка 2 створки: да.';
            } else {
                mosquitoFrame2 = 'Москитная сетка 2 створки: нет.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            if ( state.frame__1__type === 'door' ) {
                typeWindow = 'Тип: ' +  'Двухстворчатый балконный блок. Дверь слева.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        if ( state.frame__2__type === 'door' ) {
            if ( state.frame__2__type === 'door' ) {
                typeWindow = 'Тип: ' +  'Двухстворчатый балконный блок. Дверь справа.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        widthFrame1 = 'Ширина 1 створки: ' + state.frame__1__width + 'мм';
        widthFrame2 = 'Ширина 2 створки: ' + state.frame__2__width + 'мм';
    }

    if ( state.winds === 3 ) {
        if ( state.frame__1__type === 'window' && state.frame__2__type === 'window' && state.frame__3__type === 'window' ) {
            typeWindow = 'Трехстворчатое окно.';
        }
        if ( state.frame__1__type === 'window' ) {
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: глухая.';
            }
            if ( state.frame__1__horizontal_name === 'none' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: откидная.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: поворотная влево/откидная.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип 1 створки: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип 1 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__1__mosquito ) {
                mosquitoFrame1 = 'Москитная сетка 1 створки: да.';
            } else {
                mosquitoFrame1 = 'Москитная сетка 1 створки: нет.';
            }
        }
        if ( state.frame__2__type === 'window' ) {
            if ( state.frame__2__horizontal_name === 'none' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: глухая.';
            }
            if ( state.frame__2__horizontal_name === 'none' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: откидная.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: поворотная влево.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: поворотная влево/откидная.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical === false ) {
                typeFrame2 = 'Тип 2 створки: поворотная вправо.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical ) {
                typeFrame2 = 'Тип 2 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__2__mosquito ) {
                mosquitoFrame2 = 'Москитная сетка 2 створки: да.';
            } else {
                mosquitoFrame2 = 'Москитная сетка 2 створки: нет.';
            }
        }
        if ( state.frame__3__type === 'window' ) {
            if ( state.frame__3__horizontal_name === 'none' && state.frame__3__vertical === false ) {
                typeFrame3 = 'Тип 3 створки: глухая.';
            }
            if ( state.frame__3__horizontal_name === 'none' && state.frame__3__vertical ) {
                typeFrame3 = 'Тип 3 створки: откидная.';
            }
            if ( state.frame__3__horizontal_name === 'left' && state.frame__3__vertical === false ) {
                typeFrame3 = 'Тип 3 створки: поворотная влево.';
            }
            if ( state.frame__3__horizontal_name === 'left' && state.frame__3__vertical ) {
                typeFrame3 = 'Тип 3 створки: поворотная влево/откидная.';
            }
            if ( state.frame__3__horizontal_name === 'right' && state.frame__3__vertical === false ) {
                typeFrame3 = 'Тип 3 створки: поворотная вправо.';
            }
            if ( state.frame__3__horizontal_name === 'right' && state.frame__3__vertical ) {
                typeFrame3 = 'Тип 3 створки: поворотная вправо/откидная.';
            }
            if ( state.frame__3__mosquito ) {
                mosquitoFrame3 = 'Москитная сетка 3 створки: да.';
            } else {
                mosquitoFrame3 = 'Москитная сетка 3 створки: нет.';
            }
        }
        if ( state.frame__1__type === 'door' ) {
            if ( state.frame__1__type === 'door' ) {
                typeWindow = 'Тип: ' +  'Трехстворчатый балконный блок. Дверь слева.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__1__horizontal_name === 'left' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__1__horizontal_name === 'right' && state.frame__1__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        if ( state.frame__2__type === 'door' ) {
            if ( state.frame__2__type === 'door' ) {
                typeWindow = 'Тип: ' +  'Трехстворчатый балконный блок. Дверь по центру.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__2__horizontal_name === 'left' && state.frame__2__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__2__horizontal_name === 'right' && state.frame__2__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        if ( state.frame__3__type === 'door' ) {
            if ( state.frame__3__type === 'door' ) {
                typeWindow = 'Тип: ' +  'Двухстворчатый балконный блок. Дверь справа.';
            }
            if ( state.frame__3__horizontal_name === 'left' && state.frame__3__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная влево.';
            }
            if ( state.frame__3__horizontal_name === 'left' && state.frame__3__vertical ) {
                typeFrame1 = 'Тип двери: поворотная влево/откидная.';
            }
            if ( state.frame__3__horizontal_name === 'right' && state.frame__3__vertical === false ) {
                typeFrame1 = 'Тип двери: поворотная вправо.';
            }
            if ( state.frame__3__horizontal_name === 'right' && state.frame__3__vertical ) {
                typeFrame1 = 'Тип двери: поворотная вправо/откидная.';
            }
        }
        widthFrame1 = 'Ширина 1 створки: ' + state.frame__1__width + 'мм';
        widthFrame2 = 'Ширина 2 створки: ' + state.frame__2__width + 'мм';
        widthFrame3 = 'Ширина 3 створки: ' + state.frame__3__width + 'мм';
    }

    return (
      <div className='wf wf1'>
        <div className='wf__message'></div>
        <form className="wf__form" action="/submit.php" method="POST">
          <div className='wf__inner'>
            <div className='wf__markup'>Мы посчитаем стоимость окна и перезвоним в ближайшее время.</div>
            <div className='wf__fields'>
              <div className='wf__field wf__name'>
                <input required type='text' name='name' placeholder='Имя'/>
              </div>
              <div className='wf__field wf__phone'>
                <input required type='text' name='phone' placeholder='Телефон'/>
              </div>
              <div className='wf__data'>
                  {
                      <div>
                          <div>{typeWindow}</div>
                          <div>{typeFrame1}</div>
                          <div>{typeFrame2}</div>
                          <div>{typeFrame3}</div>
                          <div>{mosquitoFrame1}</div>
                          <div>{mosquitoFrame2}</div>
                          <div>{mosquitoFrame3}</div>
                          <div>{width}</div>
                          <div>{height}</div>
                          <div>{heightWindow}</div>
                          <div>{heightDoor}</div>
                          <div>{widthFrame1}</div>
                          <div>{widthFrame2}</div>
                          <div>{widthFrame3}</div>
                      </div>
                  }
                  <textarea
                  rows='3'
                  hidden
                  name='data'
                  readOnly='true'
                  value={
                      typeWindow + '<br>' +
                      typeFrame1 + '<br>' +
                      typeFrame2 + '<br>' +
                      typeFrame3 + '<br>' +
                      mosquitoFrame1 + '<br>' +
                      mosquitoFrame2 + '<br>' +
                      mosquitoFrame3 + '<br>' +
                      width + '<br>' +
                      height + '<br>' +
                      heightWindow + '<br>' +
                      heightDoor + '<br>' +
                      widthFrame1 + '<br>' +
                      widthFrame2 + '<br>' +
                      widthFrame3
                  }
              />
              </div>
            </div>
            <div className='wf__privacy'>Отправляя данную форму, я подтверждаю,что ознакомлен с <a href='/privacy'>Политикой конфиденциальности</a>, и согласен на хранение и обработку предоставленных персональных данных.</div>
            <div className='wf__action'>
              <input type="submit" name='submit' defaultValue="Отправить"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// onChange={()=>this.horizontalClick(this, 0)}
// onChange={this.horizontalClick.bind(this)}
// (e)=>this.horizontalClick(e, 0)
