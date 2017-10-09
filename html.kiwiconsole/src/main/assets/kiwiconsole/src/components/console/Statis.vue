<template>
  <div class="statis">
    <div id='chart_network_io_chart_div' style='width: 100%; height: 140px; margin:0px; pading:0px;'></div>
  </div>
</template>
<style scope>
body {
  background: whitesmoke;
  word-break: break-all;
  word-wrap: break-word;
  font-weight: normal;
  font-size: 16px;
  overflow-x: hidden;
}

.dygraph-axis-label {
  font-size: 14px;
  font-family: 'Arial';
  color: #505050;
}

.dygraph-label {
  font-size: 12px;
  font-family: 'Arial';
  font-style: italic;
  color: #505050;
}

.dygraph-title {
  font-size: 14px;
  font-family: 'Arial';
  font-weight: bold;
  text-align: left;
  padding-left: 80px;
  font-style: normal;
  color: #000000;
}

.dygraph-legend {
  font-size: 14px;
  font-family: 'Arial';
  color: #505050;
}
</style>

<script>
// document.write('<script src="../../../static/scripts/dygraph-combined.js"><\/script>')
import Toast from '@/components/widgets/Toast.vue'
import Dygraph from '../../../static/scripts/dygraph-combined.js'
import jQuery from 'jquery'
import URLTools from 'urltools'
import KiwiConstants from 'kiwi'


var getData = function(mData) {
  var data = [];
  var len=mData.length;
  for (var j = 0; j < len; ++j) {
    var date=new Date();
    date.setTime(mData[j].timestamp*1000);
    data[j] = [date];
    data[j][1] = mData[j].network_in_bytes/1024;
    data[j][2] = mData[j].network_out_bytes/1024;
    data[j][3] = mData[j].network_conntrack;
    data[j][4] = mData[j].disk_read_bytes/1024;
    data[j][5] = mData[j].disk_write_bytes/1024;
    data[j][6] = mData[j].mem_alloc_kbytes;
    data[j][7] = mData[j].mem_used_kbytes;
    data[j][8] = mData[j].numproc;
    data[j][9] = mData[j].failcnt;

  }
  return data;
};

var makeGraph = function(div, data, isStacked) {
   
  var g = new Dygraph(
    div,
    getData(data),
    {
      width: 480,
      height: 320,
      
      stackedGraph: isStacked,

      highlightCircleSize: 2,
      strokeWidth: 1,
      strokeBorderWidth: isStacked ? null : 1,

      highlightSeriesOpts: {
        strokeWidth: 3,
        strokeBorderWidth: 1,
        highlightCircleSize: 5
      }
    });
  var onclick = function(ev) {
    if (g.isSeriesLocked()) {
      g.clearSelection();
    } else {
      g.setSelection(g.getSelection(), g.getHighlightSeries(), true);
    }
  };
  g.updateOptions({ clickCallback: onclick }, true);
  g.setSelection(false, 's005');
  //console.log(g);
};

export default {
  name: 'statis',
  components: { 'fd-toast': Toast },
  data() {
    return {

    }
  },
  created() {
    var that = this;
    setTimeout(function() {
      that.chart_network_io_drawChart();
    }, 50);
  },
  methods: {
    chart_network_io_drawChart: function() {
      console.log(document.querySelector('#chart_network_io_chart_div'))
      var chart_network_io_options = {
        "labels": ["Date", "IN bps", "OUT bps"],
        "labelsKMB": true, "ylabel": "Bits per second", "colors": ["#00b040", "#0050c0"],
        "title": "Network I\/O", "gridLineColor": "#c0c0c0", "includeZero": true,
        "strokeWidth": 2, "labelsDivStyles": { "textAlign": "right" },
        "labelsDivWidth": 100, "fillGraph": true, "fillAlpha": 0.12, "titleHeight": 14,
        "dateWindow": [1507361702000, 1507448102000]
      }
      var data=[
        {
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },{
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },{
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },];
      makeGraph(document.querySelector('#chart_network_io_chart_div'),data, false);
      // var chart_network_io_chart = new Dygraph(
      //  document.querySelector('#chart_network_io_chart_div'),
      //   [

      //   ]
      //   , chart_network_io_options
      // );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

