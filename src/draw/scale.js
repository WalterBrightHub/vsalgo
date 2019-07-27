import  {scaleOrdinal} from 'd3'

export const scaleColor = scaleOrdinal()
.domain(['unsorted', 'sorted', 'selected'])
.range(['cornflowerblue', 'mediumseagreen', 'darkorange'])