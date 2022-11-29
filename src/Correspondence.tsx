import React from "react";
import { April4 } from './CorrespondenceMessages/April04';
import April10Liu from './CorrespondenceMessages/April10-Liu';
import april from './CorrespondenceMessages/Messages';
import MsgBlk from './CorrespondenceMessages/MessageBlock';

export const Correspondence = () => {
  return (
    <section className="awsui-column-layout" data-initialized="true">
      <div
        className="awsui-column-layout-columns-1 awsui-column-layout-horizontal-borders awsui-column-layout-variant-default"
        awsui-column-layout-region="content"
      >



      <April4/>
      <hr style={{
      borderWidth: '0.75px',
      borderColor: 'rgba(200,200,200,0.3 )',
      borderStyle: 'thin',
      }}/>
      <April10Liu/>
      <hr style={{
      borderWidth: '0.75px',
      borderColor: 'rgba(200,200,200,0.3 )',
      borderStyle: 'thin',
      }}/>
   

                              <MsgBlk {...april[0]} />
                              <hr style={{
      borderWidth: '0.75px',
      borderColor: 'rgba(200,200,200,0.3 )',
      borderStyle: 'thin',
      }}/>
    <MsgBlk {...april[1]} />
    <hr style={{
      borderWidth: '0.75px',
      borderColor: 'rgba(200,200,200,0.3 )',
      borderStyle: 'thin',
      }}/>
    <MsgBlk {...april[2]} />

    </div>
   

      <div className="loadMore--PYp7cuO7pA">
        <button
        title="Load More"
          className="awsui-button"
          data-custom-metric='{"value":"load-more-correspondence"}'
          data-test="load-more-correspondence"
          data-metric-name="load_more"
          data-initialized="true"
        >
          <button
            className="awsui-button awsui-button-variant-normal awsui-hover-child-icons"
            type="submit"
            override-focus=""
          >
            <span awsui-button-region="text">Load more</span>
          </button>
        </button>
      </div>
      {/* </div>
                    </div>
                    </div>
                    </section>
                    </div>
                    </div>
                    </div>
                    </section>
                    </section>
                    </section>
                    </section>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div></span>
                    </div> */}
    </section>
  );
};

export default Correspondence;
