import React, {Component} from 'react';
import "./css/main.css"
import Carousel from "./Carousel"
import Youtube from "./Youtube";

class Main extends Component {
    render() {
        return (
            <div>


                <div className="container-fluid bg-white p-0 sticky-top">
                    <div className="container ">
                        <div className="row py-4">
                            <div className="col-md-3"><a href="#"><img className="img-fluid"
                                                                       src="images/NavImages/1.svg"
                                                                       alt="#"/></a>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start">
                                <div className="d-flex align-items-center">
                                    <img className=" cursor-pointer" width="33.75" src="images/NavImages/2.svg"
                                         alt="#"/>
                                    <div className="ml-2 te-fo-1">Barcha kurslar</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <a href="#"><img className="img-fluid mr-5" src="images/NavImages/3.png" alt="#"/></a>
                                <a href="#"><img className="img-fluid mr-5" src="images/NavImages/4.png" alt="#"/></a>
                                <a href="#"><img className="img-fluid " src="images/NavImages/5.svg" alt="#"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-90">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="te-fo-2">
                                Full-Stack
                            </div>
                            <div className="te-fo-2">
                                Python Development
                            </div>
                            <div className="mt-15 te-fo-3">
                                Java dasturlash tili hozirgi kunda dunyoning gigant dasturlash
                            </div>
                            <div className="te-fo-3">
                                tillaridan biri hisoblanadi.
                            </div>
                            <div className="d-flex align-items-center mt-50">
                                <div className="mr-3">
                                    <button className="btn-dark bg-black btn-lg rounded-1">Hoziroq boshlang</button>
                                </div>
                                <div className="te-fo-4 d-flex align-items-center">
                                    <a href="#">Birinchi dars <b>bepul</b></a>
                                    <div className="ml-2"><img className="img-fluid " src="images/CardImages/i.svg"
                                                               alt="#"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center">
                            <img className="img-fluid w-100" src="images/CardImages/1.png" alt="#"/>
                        </div>

                    </div>

                </div>
                <div className="container-fluid  p-0 position-relative mt-90">
                    <Youtube/>
                    <div className="container  position-absolute-2">
                        <div className="row px-38 rounded shadow  justify-content-around">
                            <div className="col-md-2">
                                <div className="te-fo-5">Davomiyligi</div>
                                <div className="te-fo-6">11 ta modul</div>
                            </div>
                            <div className="col-md-3">
                                <div className="te-fo-5">Ta’lim turi</div>
                                <div className="te-fo-6">Online va Onsite</div>
                            </div>
                            <div className="col-md-2">
                                <div className="te-fo-5 d-flex align-items-center">Muddati <span><img
                                    className="img-fluid" src="images/CardImages/i.svg" alt="#"/></span></div>
                                <div className="te-fo-6">∞ Bir umr</div>
                            </div>
                            <div className="col-md-4">
                                <div className="te-fo-5">Ish bilan ta’minlash</div>
                                <div className="te-fo-6">PDP Career a’zosi bo’lasiz</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-270">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="te-fo-7">Full-Stack Python <p>Roadmap Yo’nalishlari</p></div>
                            <div className="te-fo-8 mt-30">
                                Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada o‘zlashtirilishi kerak
                                bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.
                            </div>
                        </div>
                    </div>
                    <div className="row mt-70 d-flex justify-content-between">
                        <div className="col-md-6">
                            <div className="bg-white rounded-1 p-3">
                                <div
                                    className="d-flex mb-5  pb-4 border-bottom-1 justify-content-between align-items-end">
                                    <div>
                                        <div className="te-fo-9">1 - yo‘nalish</div>
                                        <div className="te-fo-10 mt-2">Fontend
                                            <p> Development</p></div>
                                    </div>
                                    <img className="img-fluid mt-50" src="images/CardImages/3.png" alt="#"/>
                                </div>
                                <div className="d-flex mt-60 mb-4 align-items-center justify-content-around">
                                    <div>
                                        <div className="te-fo-9">Davomiyligi</div>
                                        <p className="te-fo-11">4 ta modul</p>
                                    </div>
                                    <div>
                                        <div className="te-fo-9">Kurs tayyorladi</div>
                                        <p className="te-fo-11">ECMA inc.</p>
                                    </div>
                                    <button className="btn-lg bg-black  rounded-1 text-white">Ba’tafsil</button>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="bg-white rounded-1 p-3">
                                <div
                                    className="d-flex mb-5  pb-4 border-bottom-1 justify-content-between align-items-end">
                                    <div>
                                        <div className="te-fo-9">2 - yo‘nalish</div>
                                        <div className="te-fo-10 mt-2">Python
                                            <p> Development</p></div>
                                    </div>
                                    <img className="img-fluid mt-50" src="images/CardImages/4.svg" width={160} alt="#"/>
                                </div>
                                <div className="d-flex mt-60 mb-4 align-items-center justify-content-around">
                                    <div>
                                        <div className="te-fo-9">Davomiyligi</div>
                                        <p className="te-fo-11">3 ta modul</p>
                                    </div>
                                    <div>
                                        <div className="te-fo-9">Kurs tayyorladi</div>
                                        <p className="te-fo-11">Super Dispatch</p>
                                    </div>
                                    <button className="btn-lg bg-black  rounded-1 text-white">Ba’tafsil</button>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-6 mt-15">
                            <div className="bg-white rounded-1 p-3">
                                <div
                                    className="d-flex mb-5  pb-4 border-bottom-1 justify-content-between align-items-end">
                                    <div>
                                        <div className="te-fo-9">3 - yo‘nalish</div>
                                        <div className="te-fo-10 mt-2">Database
                                            <p> Development</p></div>
                                    </div>
                                    <img className="img-fluid mt-50" src="images/CardImages/5.png" alt="#"/>
                                </div>
                                <div className="d-flex mt-60 mb-4 align-items-center justify-content-around">
                                    <div>
                                        <div className="te-fo-9">Davomiyligi</div>
                                        <p className="te-fo-11">2 ta modul</p>
                                    </div>
                                    <div>
                                        <div className="te-fo-9">Kurs tayyorladi</div>
                                        <p className="te-fo-11">ECMA inc.</p>
                                    </div>
                                    <button className="btn-lg bg-black  rounded-1 text-white">Ba’tafsil</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 mt-15">
                            <div className="bg-white rounded-1 p-3">
                                <div
                                    className="d-flex mb-5  pb-4 border-bottom-1 justify-content-between align-items-end">
                                    <div>
                                        <div className="te-fo-9">4 - yo‘nalish</div>
                                        <div className="te-fo-10 mt-2">Django
                                            <p> Development</p></div>
                                    </div>
                                    <img className="img-fluid mt-50" src="images/CardImages/6.1.png" alt="#"/>
                                </div>
                                <div className="d-flex mt-60 mb-4 align-items-center justify-content-around">
                                    <div>
                                        <div className="te-fo-9">Davomiyligi</div>
                                        <p className="te-fo-11">3 ta modul</p>
                                    </div>
                                    <div>
                                        <div className="te-fo-9">Kurs tayyorladi</div>
                                        <p className="te-fo-11">Super Dispatch</p>
                                    </div>
                                    <button className="btn-lg bg-black  rounded-1 text-white">Ba’tafsil</button>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div className="row mt-150">
                        <div className="col-md-8">
                            <div className="te-fo-7 ">Ta‘lim jarayoni</div>
                            <div className="te-fo-8 mt-30">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.
                            </div>
                        </div>
                    </div>
                    <div className="mt-60">
                        <Carousel/>
                    </div>
                    <div className="row mt-150">
                        <div className="col-md-8">
                            <div className="te-fo-7 ">Mentorlar</div>
                            <div className="te-fo-8 mt-30">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.
                            </div>
                        </div>
                    </div>
                    <div className="row  mt-80">
                        <div className="col-md-4  p-2">
                            <div className=" bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/1.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/2.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/3.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/4.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/5.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/6.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <div className="bg-white rounded-1 d-flex flex-column align-items-center">
                                <img className="img-fluid mt-5" src="images/CardImg/7.svg" alt="#"/>
                                <div className="mt-30 te-fo-12">
                                    Khurshidbek Kurbanov
                                </div>
                                <div className="te-fo-13 mt-1">
                                    Senior Mobile Developer
                                </div>
                                <img className="img-fluid mt-27 mb-4" src="images/CardImg/0.svg" alt="#"/>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-175">
                        <div className="col-md-9">
                            <div className="te-fo-7 ">Kursimiz
                                <p>bitiruvchilari rezyumesi</p></div>
                            <div className="te-fo-8 mt-30">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.
                            </div>
                        </div>

                    </div>

                    <div className="row mt-42 p-5 bg-white rounded-1">
                        <div className="col-md-2">
                            <img className="img-fluid mt-27 mb-4" src="images/CardImg/kim.png" alt="#"/>
                        </div>
                        <div className="col-md-10">
                            <div className="pb-72 position-relative  border-bottom-1">
                                <div className="te-fo-13">Lavozimi</div>
                                <div className="te-fo-15 mb-sm-5">Full Stack Web Developer</div>
                                <img className=" position-absolute-3" src="images/CardImg/s.svg" alt="#"/>
                            </div>
                            <div className="mt-3 mt-sm-5">
                                <div className="te-fo-13">
                                    Oylik ish maosh
                                </div>
                                <div className="te-fo-16">
                                    7 000 000 so’mdan
                                </div>
                                <div className="te-fo-17 mt-70">
                                    Profesional ko’nikmalar
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        Saytlarni verstka
                                        <p>qilish</p>
                                    </div>
                                </div>
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        HTML, CSS va JavaScript
                                        <p>bilan ishlash</p>
                                    </div>
                                </div>
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        Moslashuvchanlik va
                                        <p> brauzerlararo muvofiqligi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        Git versiyasini boshqarish
                                        <p>tizimi
                                            bilan ishlash</p>
                                    </div>
                                </div>
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        Vue va React freymvorklaridan
                                        <p>foydalanish</p>
                                    </div>
                                </div>
                                <div className="col-md-4 align-items-baseline d-flex mt-37">
                                    <img className="mr-2" src="images/CardImg/round.svg" alt="#"/>
                                    <div className="te-fo-18">
                                        Vue.js-da saytlar
                                        <p>va ilovalarni yarating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-175">
                        <div className="col-md-9">
                            <div className="te-fo-7 ">Kursni xarid qilish</div>
                            <div className="te-fo-8 mt-30">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.
                            </div>
                        </div>


                        <div className="col-md-7 mt-70">
                            <div className="border-top-1 d-flex align-items-center justify-content-between pt-4">
                                <input type="checkbox" className="mr-3 form-checkbox"/>
                                <div className=" d-flex align-items-end">
                                    <div>
                                        <p className="te-fo-12">Frontend Development kursi</p>
                                        <p className="te-fo-15">1 550 000 so‘m</p>
                                    </div>
                                    <div className="te-fo-19">2 000 000 so‘m</div>
                                </div>
                                <button className="btn-1 "><span className="plus">+</span></button>
                            </div>
                            <div className="border-top-1 mt-30 d-flex align-items-center justify-content-between pt-4">
                                <input type="checkbox" className="mr-3 form-checkbox"/>
                                <div className=" d-flex align-items-end">
                                    <div>
                                        <p className="te-fo-12">Frontend Development kursi</p>
                                        <p className="te-fo-15">1 550 000 so‘m</p>
                                    </div>
                                    <div className="te-fo-19">2 000 000 so‘m</div>
                                </div>
                                <button className="btn-1 "><span className="plus">+</span></button>
                            </div>
                            <div className="border-top-1 mt-30 d-flex align-items-center justify-content-between pt-4">
                                <input type="checkbox" className="mr-3 form-checkbox"/>
                                <div className=" d-flex align-items-end">
                                    <div>
                                        <p className="te-fo-12">Frontend Development kursi</p>
                                        <p className="te-fo-15">1 550 000 so‘m</p>
                                    </div>
                                    <div className="te-fo-19">2 000 000 so‘m</div>
                                </div>
                                <button className="btn-1 "><span className="plus">+</span></button>
                            </div>
                            <div
                                className="border-top-1 border-bottom pb-3 mt-30 d-flex align-items-center justify-content-between pt-4">
                                <input type="checkbox" className="mr-3 form-checkbox"/>
                                <div className=" d-flex align-items-end">
                                    <div>
                                        <p className="te-fo-12">Frontend Development kursi</p>
                                        <p className="te-fo-15">1 550 000 so‘m</p>
                                    </div>
                                    <div className="te-fo-19">2 000 000 so‘m</div>
                                </div>
                                <button className="btn-1 "><span className="plus">+</span></button>
                            </div>
                        </div>
                        <div className="col-md-5 mt-70">
                            <div className="bg-1  rounded-1 align-items-center p-4 d-flex">
                                <img src="images/vector/1.svg" alt="#"/>
                                <div className="ml-4 te-fo-20">
                                    23-mart da
                                    <div>chegirmalar tugaydi</div>
                                </div>
                            </div>
                            <div className="mt-15 bg-white rounded-1 align-items-center p-30 d-flex">
                                <span className="bg-2"><img src="images/vector/2.svg" alt="#"/></span>
                                <div className="ml-4">
                                    <div className="te-fo-21">Pulni qaytarib olish</div>
                                    <div> 7 kun ichida pulni qaytarib olish kafolatlanadi</div>
                                </div>
                            </div>
                            <div className="mt-15 bg-white rounded-1 align-items-start p-3 d-flex">
                                <span className="bg-2"><img src="images/vector/3.svg" alt="#"/></span>
                                <div className="ml-4">
                                    <div className="te-fo-21">Pulni qaytarib olish</div>
                                    <div> 7 kun ichida pulni qaytarib olish kafolatlanadi</div>
                                </div>
                            </div>
                            <div className="mt-15 bg-white rounded-1 align-items-start p-3 d-flex">
                                <span className="bg-2"><img src="images/vector/4.svg" alt="#"/></span>
                                <div className="ml-4">
                                    <div className="te-fo-21">Savolingiz bormi ?</div>
                                    <div> Qo‘ng‘iroq qiling: <b>(+99878) 777-47-47</b>
                                    </div>
                                    <div>Savolingizni yozing:<a href="#"><b
                                        className="text-dark">www.t.me/supportbot</b></a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-4 ">
                        <div className="col-md-7"></div>
                        <div className="col-md-5 p-3">
                            <div className="bg-white rounded-1 p-30">
                                <div className="te-fo-22 stick ">
                                    Menda promo kod mavjud
                                </div>
                                <div className="mt-80">Promokod</div>
                                <div className="te-fo-23">-1 000 000 so‘m</div>
                                <div className="mt-42">Kurs uchun chegirma</div>
                                <div className="te-fo-23">-900 000 so‘m</div>
                                <div className="mt-42 te-fo-24">
                                    Kursning chegirmasiz narxi <b>5 000 000 so‘m</b>
                                </div>
                                <div className="stick-2 mt-20"/>
                                <div className="stick-2 mt-1"/>
                                <div className="mt-30">Tanlangan kurslaringiz narxi</div>
                                <div className="te-fo-15 mt-1">3 100 000 so‘m</div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="border-top-2"/>
                <div className="bg-white">
                    <div className="container  ">
                        <div className="row py-3">
                            <div className="col-md-7">
                                <div>Tanlangan kurslar:</div>
                                <div className="te-fo-25 mt-1">Frontend Development, Python Development</div>
                            </div>
                            <div className="col-md-5 d-flex align-items-center">
                                <div>
                                    Tanlagan kurslaringiz narxi
                                    <div className="te-fo-25">
                                        3 100 000 so'm
                                    </div>
                                </div>
                                <button className="btn btn-dark rounded-1 ml-3">Xarid qilish</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top-2"/>
                <div className="bg-white">
                    <div className="container pt-114">
                        <div className="row">
                            <div className="col-md-6">
                                <div>(78) 777-47-47</div>
                                <div className="te-fo-27 mt-2">Yagona xizmat raqami</div>
                                <img src="./images/vector/5.png" alt="#" className="mt-70"/>
                                <div className="te-fo-28 mt-2">
                                    Toshkent shahar. Shayxontohur tum.,
                                    <div>Zarqaynar ko'ch., 3b-uy.</div>
                                </div>
                                <div className="d-flex align-items-center mt-5 mb-3">
                                    <img src="./images/vector/6.png" alt="#"/>
                                    <img src="./images/vector/7.png" className="ml-3" alt="#"/>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex flex-column">
                                <a href="#" className="te-fo-25 mb-3">
                                    Asosiy
                                </a>
                                <a href="#" className="te-fo-29">
                                    Kompaniya haqida
                                </a>
                                <a href="#" className="te-fo-29">
                                    Hamkorlik
                                </a>
                                <a href="#" className="te-fo-29">
                                    Huquqiy hujjatlar
                                </a>
                                <a href="#" className="te-fo-29">
                                    Bog’lanish
                                </a>
                            </div>
                            <div className="col-md-2 d-flex flex-column">
                                <a href="#" className="te-fo-25 mb-3">
                                    Ta’lim
                                </a>
                                <a href="#" className="te-fo-29">
                                    Onside
                                </a>
                                <a href="#" className="te-fo-29">
                                    Online
                                </a>
                                <a href="#" className="te-fo-29">
                                    Imtiyoz
                                </a>
                                <a href="#" className="te-fo-29">
                                    Code Skill
                                </a>
                            </div>
                            <div className="col-md-2 d-flex flex-column ">
                                <a href="#" className="te-fo-25 mb-3">
                                    Loyihalar
                                </a>
                                <a href="#" className="te-fo-29">
                                    PDP Live
                                </a>
                                <a href="#" className="te-fo-29">
                                    PDP Meetup
                                </a>
                                <a href="#" className="te-fo-29">
                                    PDP Generation
                                </a>
                                <a href="#" className="te-fo-29">
                                    Sertifikat
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container border-top-3 pt-4 d-flex pb-4 justify-content-between align-items-center">
                        <div>Inflex, Inc. 2017 – 2020</div>
                        <div>
                            <a href="#"><b className="icon-1"></b></a>
                            <a href="#"><b className="icon-2 ml-3"></b></a>
                            <a href="#"><b className="icon-3 ml-3"></b></a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Main;