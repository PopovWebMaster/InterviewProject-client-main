import React from 'react';
import { Component } from 'react';

export default class HomePageTemplate extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <article id="welcome">
                    <h2 className='accent1'>Добро пожаловать на сайт!</h2> 
                    <h2 className='accent2'>посвящённый самостоятельному изучению английского языка</h2>
                    <p>Самостоятелно изучить любой иностранный язык, в частности английский, без посторонней помощи, пожалуй, крайне сложно. Особенно если вы не живёте в среде англо-говорящих людей и над вами нет постоянно давлеющего фактора вынуждающего это делать. Безусловно самый эффективный способ изучения языка - это живое общение с преподавателем, или другим лицом, владеюшим методикой подачи материала. Но вы, как человек новый, в данном вопросе, врядли сможете без посторонней помощи науить себя тому, что сами, по-сути, не умеете.</p>
                    <p>Однажды, передо мной остро встал вопрос изучения английского. Это было связано с проффесиональной деятельностью - необходимостью читать иностранные статьи, разлиные документации, учебные пособия и прочее. К тому же, мечта посмотреть мир и побывать в разных странах, без знания английского, имеет крайне сомнителную возможность к осуществлению.</p>
                    <p>И вот, учить язык надо, а времени регулярно посещать реппетитора нет (из-за работы), да и удовольствие это, по тем временам, для меня было не их дешёвых. А я даже читать по-английски не мог (в школе учил другой язык), то-есть язык мне предстояло осваивать с полного ноля. И как же быть? Повторюсь, язык учить надо, причём бесплатно, самостоятельно и в удобное для меня время, а это или рано утром, или поздно вечером. Скажу вам, условия задачки ещё те. Но отступать нельзя и я приступил к решению вопроса самостоятельного изучения английского языка. </p>
                    <p>Имея школьный опыт изучения другого языка, я решил в самом начале не браться за граматику, без посторонней помощи, по-учебникам, мне кажется, её освоить не возможно. Я решил подойти к решению вопроса с другой стороны: просто учить как можно болше английских слов, пополняя тем самым свой английский словарны запас. Ведь зная лишь один перевод слов, мне в школе не однократно удавалось переводить иностранные тексты. Я прикинул, что освоив 6000-10000 тыс английских слов, выучить правила построения предложения будет намного проще, дешевле и быстрее (что не маловажно), да и опыт, накопленный к тому моменту, чтения английских текстов будет не малым для того подспорем. Было решено, учу слова.</p>
                    <p>Тепреь передо мной встала другая задача, как такой огромный объём, да еще и без посторонней помощи, впихнуть к себе в голову? Ведь никакими феноменалными способностями матушка природа меня не осчастливила, да и память у меня так-себе, скажу я вам. Хорошенько поразмыслив на тему о том, как вообще иностранные слова попадают к нам в память и становятся частью нас, я и пришёл к решению создания данного сайта, и призываю вас как можно вдумчивее прочесть и осмыслить основную его идею изложенную ниже.</p>
                    <div className="accent"><strong>Для того что бы выучить некое среднестатистическое иностранное слово, его нужно:</strong>
                        <ul>
                            <li>1 - достаточное количество раз <strong>прочитать,</strong></li>
                            <li>2 - достаточное количество раз <strong>произнести,</strong></li>
                            <li>3 - достаточное количество раз <strong>услышать,</strong></li>
                            <li>4 - достаточное количество раз <strong>перевести,</strong></li>
                            <li>5 - достаточное количество раз <strong>применить,</strong></li>
                        </ul>
                    </div>
                    <p>То-есть, помимо всего прочего, нужна не только платформа, на которой все эти слова в удобной форме для обучения были бы представлены в виде - от самых часто употребляемых к менее используемым. Но еще нужна программа, которая бы могла эти слова у вас спрашивать как на русском, так и на английском языках. С акцентом на большую проработку слов, которые вам даются с трудом, при этом уделяя меньше внимания вашим словам, которые вы легко запомнили. Программа, которая бы могла отслеживать ваши результаты, ваши ошибки, которая могла бы указывать вам на ваши слабые места и предлагала возможность для их проработки. И всё это бесплатно и эфективно.</p>
                    <p>Прийдя к данному выводу, первым делом я полез искать решение на просторах великого интернета. Но ничего удовлетворяющего моим запросам, к сожалению, не нашёл. По-этому решил делать сайт самостоятельно в первую очередь для себя. По-началу он жил у меня на компьютере только для одного меня, но теперь я решил выложить его во всеобщий доступ для помощи таким же интузиастам как сам, которые идут к своей цели не смотря на, казалось бы, непреодолимые трудности не отступая и не сдаваясь.</p>
                    <p>Что важно! Программа будет работать лично с вами и с вашим личным результатом, а для этого обязательно необходимо пройти регистрацию. Иначе - никак. </p>
                </article>

                <article id="how_to_learns">
                    <h2 className='accent1'>Как учиться?</h2> 
                    <h2 className='accent2'>идея сайта проста, но и с ней нужно ознакомиться</h2>
                    <p> Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение.</p>
                    <p>Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение.</p>
                    <p>Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение. Здесь какой-то текст с описанием того как проходит обучение.</p>
                </article>

                <p  className='enter_exit' style = {{display: 'block'}}>
                    <a href = 'http://en-v6/register'>Пройти регистрацию и начать работу!</a>
                </p>

                <article id="important">
                    <h2 className='accent1'>Что важно?</h2> 
                    <h2 className='accent2'>на что нужно обратить внимание для более эффективного обучения?</h2>
                    <p>
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                        Здесь какой-то текст с описанием того на что нужно обратить внимание.
                    </p>
                    <p>
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                    </p>
                    <p>
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                        Здесь какой-то текст с описанием того как проходит обучение.
                    </p>
                </article>  
            </>
        );
        
		
    }

};







