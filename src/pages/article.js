import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import LayOut from "../components/layout"
import SEO from "../components/seo"

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container:{
    padding: '45px 21px'
  },
  paper: {
    boxShadow: 'none',
  },
  media: {
    height: 358,
  },
  tittle: {
    boxShadow: 'none',
  },
});




const articles = [
{
id: 1,
tittle: "هيلين كيلر",
image: "/blogs/1.jpg",
description: 'ساهمَت في حلّ الكثير من المشاكل الخاصّة بحقوق المرأة في ما يتعلّق بالتصويت، والاهتمام بتحديد النَّسْل، كما ساهمَت في وَضْع حَجر الأساس لمُؤسَّسة خاصّة بمُكافَحة سوء التغذية، والآثار الجانبيّة لفُقدان البَصَر'
},
{
id: 2,
tittle: " نيك فيوتتش ",
image: "/blogs/2.jpg",
description: 'تعلم نيك الكتابة بأصابع قدمه الصغيرة وتعلم استخدام الحاسوب والطباعة عليه وتعلم أيضًا رمى كرات التنس والعزف على الطبل كما تعلم السباحة، وفى سن 17 عاما أسس منظمته غير الربحية "الحياة بدون أطراف" لبث الأمل والتفاؤل وإخبار العالم أن الحياة لا تقف على إعاقة'
},
{
id: 3,
tittle: " طه حسين ",
image: "/blogs/3.jpg",
description: 'فقد طه حسين بصره في طفولته ولكن ذلك لم يعيقه نهائيا, حتي أصبح عميد الأدب العربي, وعمل علي تطوير الروايةالعربية, ومن أشهر مؤلفاته كتاب الأيام, ويعد من أبرز الشخصيات في الحركة العربية الأدبية الحديثة'
},
{
id: 4,
tittle: " رحمة خالد ",
image: "/blogs/4.jpg",
description: 'رحمة خالد بطلة سباحة، حصلت على المركز الأول في بطولة السباحة للأولمبياد لسنة 2010، 2011، وأيضا بطولة الجمهورية عام 2010، وحضرت مؤتمر الشباب الأول المقام في لبنان على هامش البطولة الإقليمية العاشرة كمتحدث رسمي لذوي القدرات الخاصة'
},
{
id: 5,
tittle: " ستيفن هوكينج ",
image: "/blogs/5.jpg",
description: 'أصيب استيفان بمرض عصبي في الـ 21 وعلي الرغم من ذلك أستطاع قهر العجز وابهار العالم كله, حيث حصل علي الدكتوراه من جامعة كامبريج وحصل علي درجة الفزياء الأولي وتفوق علي باقي أقرانه العلماء , حيث أطلقوا عليه في المدرسة لقب أينشتاين'
},
{
id: 6,
tittle: " فريدا كاهلو ",
image: "/blogs/6.jpg",
description: 'رسامة مكسيكية شهيرة، ولدت عام 1907، أصيبت بشلل الأطفال فى قدمها اليمنى ليس ذلك فقط بل سريعًا ما تعرضت إلى إعاقة أخرى فى ساقها، ما جعلها تعيش طفولة سيئة جدًا، لكنها لم تكتم أحزانها أو مأساتها داخلها وتمكنت من نقل مشاعرها فى فى لوحاتها مستخدمة 3 أدوات "ورقة وريشة وقلم'
}
];


export default () => {
  const classes = useStyles();

return(
  <LayOut
  background="/img_3.jpg"
  >
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
      />



     <CssBaseline />
     <Container fixed className={classes.container}>

      <Grid container spacing={3} >
          { articles.map((article,index)=>(
              <Grid item  md={4}  xs={12} sm={6}  key={article.index}>
                 <Card>
                   <CardActionArea>
                     <CardMedia
                       className={classes.media}
                       image={article.image}
                       title="ahmed elkordy"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {article.tittle}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {article.description}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                 </Card>

              </Grid>
        ))}
     </Grid>

     </Container>


  </LayOut>
)
}
