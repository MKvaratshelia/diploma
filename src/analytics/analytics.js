import "./analytics.css";
import Statistics from "../js/components/Statistics";
import {
  analiticsRequest,
  weeklyNews,
  mentionsInTitles,
  diagram,
} from "../js/constants/constants";
const statistics = new Statistics(localStorage, diagram);
statistics.buildGraph(analiticsRequest, weeklyNews, mentionsInTitles);
