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
                        <h5 class="text-muted ls-2 mb-0">Network Topology</h5>
                      </div>
                    </div>
                    <p>
                      <del>There will be placed a Topolopy</del>
                    </p>
                  </card>
                </div>
                <!-- right part-->
                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-2 mb-2">Details</h6>
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
  


  export default {
    components: {
      LineChart,
  
    },
    data() {
      return {
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
      
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
