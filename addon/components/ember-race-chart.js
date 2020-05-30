import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';
import { set } from '@ember/object';

export default class EmberRaceChartComponent extends Component {
  @tracked dataKey;
  @tracked currentIndex;

  constructor(owner, { data }) {
    super(...arguments);
    if (isPresent(data)){
      this.setCurrentData(data);
      setInterval(() => {
        this.setCurrentData(data);
      }, this.interval);
    }
  }

  setCurrentData(data) {
    let dataKeys = Object.keys(data);
    this.currentIndex = (this.currentIndex || 0) % dataKeys.length;
    this.dataKey = dataKeys[this.currentIndex++];
  }

  get interval() {
    return this.args.interval || 1000;
  }

  get sort() {
    return this.args.sort || 'desc';
  }

  get positionTransitionDuration() {
    return this.args.positionTransitionDuration || '500ms';
  }

  get widthTransitionDuration() {
    return this.args.widthTransitionDuration || '500ms';
  }

  get space() {
    return this.args.space || 10;
  }

  get height() {
    return this.args.height || '30px';
  }

  get barColor() {
    return this.args.barColor || '#000';
  }

  get keyWidth() {
    return this.args.keyWidth || '200px';
  }

  get max() {
    let {
      chartData,
      sort
    } = this;
    if (sort === 'desc') {
      return chartData[0].value;
    } else if (sort === 'asc') {
      return chartData[chartData.length - 1].value;
    }
    return Math.max(...chartData.map(d => d.value));
  }

  get chartData() {
    let {
      dataKey,
      sort,
      args: { valueFormatter } = {}
    } = this;
    if (!dataKey) {
      return [];
    }
    let chartData = [...this.args.data[dataKey]];
    chartData = chartData.filter(e => e.value);
    if (valueFormatter) {
      chartData = chartData.map((e) => {
        set(e, 'formattedValue', valueFormatter(e.value));
        return e;
      })
    }
    if (sort === 'desc') {
      return chartData.sort((a, b) => b.value - a.value);
    } else if (sort === 'asc') {
      return chartData.sort((a, b) => a.value - b.value);
    }
    return chartData;
  }
}
