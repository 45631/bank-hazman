import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

export class CategoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const queryParams = this.props.history.location.search;
    const categoryName = queryParams.split("=")[1];
    console.log(categoryName);
    const Categories = [
      {
        name: "baby",
        text: `<h3>שמרטפות</h3> <i class="fas fa-baby" ></i><p>שמרטף, שומר טף או באנגלית בייביסיטר, הוא אדם השומר על תינוק או ילד,  בזמן שהוריו לא נמצאים כדי לטפל בו.<br/><br/> רוצים לצאת לבלות? תור לרופא? מוכרחים לרוץ לסופר לפני שנסגר? מסעדה חדשה שאתם רוצים לבדוק הערב? 
        <br/>בבנק הזמן תוכלו למצוא שמרטפים - מתנדבים שיטפלו בילדכם.<br/>
        בפנייה לשמרטף - מתנדב נא ציינו מספר ילדים, גילאים ושעות נדרשות
        <br/><br/>אוהבים ילדים? חושבים שאין כמו ריח של תינוק?
        <br/>הפקידו בחשבונכם שעות שמרטפות
        <br/>תוכלו לציין העדפות גיל, מגבלת שעות ומיקום.</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
        </a>
        `
      },
      {
        name: "tv",
        text: `<h3>עזרה טכנולוגית</h3><i class="fas fa-tv"></i><p>טכנולוגיה (מיוונית: טכנו (Τεχνο) = אומנות, לוגיה (Λογία) = תורה; כלומר: תורת האומנות) היא תחום דעת העוסק בחיפוש פתרונות מעשיים כמענה לרצונות וצרכים, תוך ניצול חידושי המדע. .
<br/><br/>סובלים מטכנופוביה? מרגישים שאיבדתם את זה? רוצים לבצע איזושהי פעולה ולא ממש יודעים איך?
<br/>פנו לעזרת המתנדבים שלנו שישמחו לסייע לכם בתמיכה טכנית ויסבירו לכם בסבלנות כיצד להפעיל את המכשירים שברשותכם.

<br/><br/>חובבי טכנולוגיה? עוקבים אחר כל מוצר חדש?
<br/> בואו לעשות משהו טוב עם השליטה שלכם בשוק המתפתח ללא הרף ולסייע לאלו שמתקשים להשתלב ולעקוב אחר השינויים
</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "pen",
        text: `<h3>כתיבה וניסוח</h3> <i class="fas fa-pen"></i><p>עט, דיו ונייר מפחידים אותי יותר מחרב ומאקדח.
- אלכסנדר דיומא
<br/><br/>קניתם מתנה ורציתם לצרף כמה מילות ברכה? רוצים להביע הוקרה, תודה, אהבה או אכזבה אבל שום דבר קריא לא יצא?
<br/>פנו לעזרת המתנדבים הכותבים שלנו, שינסחו עבורכם כל מה שרציתם להגיד
<br/><br/>
טובים בניסוח? המילים נוזלות לכם מקצה העט? אוהבים את התרפיה והסיפוק שבכתיבה יפה?
<br/>בואו לעזור למשתמשים האחרים להעביר את המילים שלהם מן הלב אל הדף.</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "motorcycle",
        text: `<h3>שליחויות</h3> <i class="fas fa-motorcycle"></i><p> שילוח אקספרס תוך מספר שעות ובהתראות קצרות, הקפדה על ביצוע מקצועי. שליחות מדלת לדלת, שליחויות מהיום להיום, הפצת משלוחים/ חבילות.
<br/><br/>גשם זלעפות? חום אימים?קור כלבים? מזג אוויר נוח אבל סתם כך אין לכם כוח / יכולת לצאת מהבית?
<br/>המשלוחנים - המתנדבים שלנו יאספו עבורכם תרופות מבית המרקחת, חבילות מן הדואר וכל מה שאתם זקוקים לו ונמצא מחוץ לבית
<br/><br/>מסתובבים הרבה בדרכים? אוהבים לרכב על אופנוע או לנהוג ברכב?
<br/>אספו אתכם בדרך שליחויות קטנות</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "cap",
        text: `<h3>מורים פרטיים</h3> <i class="fas fa-graduation-cap"></i><p> מורה פרטי הוא מדריך או מורה אשר מלמד נושא לימודי מסוים לתלמיד יחיד או לקבוצה קטנה של תלמידים במתכונת אשר נקראת שיעור פרטי. תשומת לב כזו מאפשרת לתלמיד לשפר ידע או מיומנויות מהר יותר מאשר בסביבה של כיתה.
<br/> מעוניינים להמקצע בתחום נוסף,לרכוש ידע או סתם כתחביב?
<br/><br/>מגוון רחב של בעלי ידע, החל באמנויות הנגינה, הציור, הכיור או הפיסול וכלה בתחומי למידה מקצועיים כמו מתמטיקה, אנגלית או דקדוק ועוד ועוד
<br/><br/>אלופים בתחום מסוים? אוהבים ללמד?
<br/>בואו להעביר את הידע שלכם הלאה
</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "dog",
        text: `<h3>דוגיסיטר</h3><i class="fas fa-dog"></i><p>כל מי שיש לו כלב בבית יודע, שאחת המטלות הכי פחות נעימות שיש היא להוציא אותו החוצה לטיול. צריך לזכור, ההמלצה היא להוציא את הכלב שלוש פעמים, לפחות חצי שעה בכל פעם.
<br/>עמוסים במבחנים? נוסעים לטיול?
<br/>היעזרו במתנדבים שלנו שיטיילו עם הכלב שלכם
<br/><br/>אוהבים כלבים? אוהבים לטייל בחוץ?
<br/>התנדבו לטייל עם חיות המחמד של יתר המשתמשים</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "car",
        text: `<h3>הסעות</h3><i class="fas fa-car"></i><p>טרמפ, או "הקפצה", הוא דרך של שימוש תחבורה פרטית, בה מקבל נוסע הסעה מאדם אחר, בדרך כלל מנהגי מכוניות פרטיות.
<br/>אין לכם רכב? קשה לכם להטלטל בתחבורה ציבורית? צריכים לקפוץ לכמה דקות אל מחוץ לשכונה?
<br/>חייגו אלינו ובדקו האם נהג מתנדב נוסע כעת לכיוון שלכם
<br/><br/>בעלי רכב? נוסעים במסלול קבוע? יש לכם מקום פנוי?
<br/><a href="./Applicationform.html">לפני צאתכם לדרך בדקו איתנו האם משתמש מעוניין להצטרף אליכם</a>
</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "hamburger",
        text: `<h3>ארוחה חמה</h3><i class="fas fa-hamburger"></i></i><p>בחברה האנושית נהוג להקדיש פרקי זמן במהלך היום לאכילה. ברוב החברות המודרניות מתקיימת שגרה של כשלוש ארוחות במהלך היום - ארוחת בוקר, ארוחת צהריים וארוחת ערב. בנוסף להן או במקומן, קיים מגוון של ארוחות ביניים.
<br/>אחרי לידה? עייפים משבוע עמוס? לא חשים בטוב?
<br/>היעזרו בשירות הארוחות החמות שלנו, ארוחות המבושלות בתנאים הגייניים וביד אוהבת במטבחי הבשלנים המתנדבים שלנו
<br/><br/>אוהבים את המטבח? נהנים מהסיפוק שבהאכלת גדוד אנשים רעבים?
<br/>בואו לבשל בבנק הזמן
</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      },
      {
        name: "tools",
        text: `<h3>תחזוקה ותיקונים</h3><i class="fas fa-tools"></i></i><p>צביעת הבית, חשמל, אינסטלציה, הרכבה של מיטות ושידות, תלייה של מדפים, תיקון תריסים והתקנה של אביזרי בטיחות.
<br/>ניחתנם בשתי ידיים שמאליות? לא יודעים מאיזה צד מפעילים את המקדחה? אין לכם בכלל ארגז כלים?
<br/>הזעיקו את ההנדימנים המתנדבים שלנו שיבצעו עבורכם תיקונים קלים ועבודות תחזוקה שונות בביתכם
<br/><br/>אוהבים לנגר, לסייד, לשייף או לתקן?
<br/>הפקידו שעות עבודות תחזוקה בחשבונכם בבנק
</p><a class="carousel-control-next"  role="button" data-slide="next" onclick="back()">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only"></span>
</a>
`
      }
    ];
    var content = "";
    content = Categories.find(ele => ele.name == categoryName);

    return (
      <div>
        <p> {ReactHtmlParser(content.text)}</p>
      </div>
    );
  }
}
