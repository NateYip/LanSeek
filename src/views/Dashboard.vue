<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <!-- left part -->
                <div class="col-xl-8">
                  <card header-classes="bg-transparent">
                    <div slot="header" class="row align-items-center">
                      <div class="col">
                        <h1 class="display-4">Network Topology</h1>
                      </div>
                    </div>
                    <!--拓扑图的位置 -->
                    <div id="mountNode">

                    </div>
                  </card>
                </div>
                <!-- right part-->
                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-2 mb-2">Ping Speed</h6>
                                <!-- 具体某一个节点IP-->
                                <h5 class="h4 mb-0">Node Name</h5>
                            </div>
                        </div>

                        <line-chart
                                :height="100"
                                ref="lineChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </line-chart>
                    </card>
                </div>
                
            </div>
            <!-- End charts-->
        </div>

    </div>
</template>
<script>
  import LineChart from '@/components/Charts/LineChart';
  import G6 from '@antv/g6';
  export default {
    components: {
      LineChart,
    },

    data() {
      return {
        Gdata : {
        // 点集
        nodes: [
          {
            id: 'node1', // String，该节点存在则必须，节点的唯一标识
            x: 100, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
          },
          {
            id: 'node2', // String，该节点存在则必须，节点的唯一标识
            x: 300, // Number，可选，节点位置的 x 值
            y: 200, // Number，可选，节点位置的 y 值
          },
        ],
        // 边集
        edges: [
          {
            source: 'node1', // String，必须，起始点 id
            target: 'node2', // String，必须，目标点 id
          },
        ],
        },
        redBarChart: {
          chartData: {
            labels: ['1m24s', '1m27s', '1m30s', '1m33s', '1m36s'],
            datasets: [{
              label: 'Ping',
              data: [25, 20, 30, 22, 17]
            }]
          }
        }
      };
    },

    methods: {
      DrawGph(){
        const TRY = async () => {
            const response = await fetch(
              'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
            );
            const remoteData = await response.json();
            const graph = new G6.Graph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
            fitView: true,
            fitViewPadding: [20, 40, 50, 20],
          });
          graph.data(remoteData); // 读取 Step 2 中的数据源到图上
          graph.render(); // 渲染图
        }
        TRY()
      }
    },
    mounted() {
      this.DrawGph()
    }
  };
</script>
<style></style>
