import React from 'react';


export type MessageBlockProps = {
    msgBody: JSX.Element;
    msgDate: Date;
    senderEmail: string;
    senderName: string;
    attachmentLinks: {
        link: string;
        fileName: string;
    }[];



}

export default class MsgBlk extends React.Component<MessageBlockProps & Partial<HTMLDivElement>, MessageBlockProps> {

   private dateOptions: Intl.DateTimeFormatOptions = {
       
   }
    constructor(props: MessageBlockProps)   {
        super(props);

        this.state = {
            msgBody: props.msgBody,
            msgDate: props.msgDate,
            senderEmail: props.senderEmail,
            senderName: props.senderName,
            attachmentLinks: props.attachmentLinks
        }

        this.render = this.render.bind(this);
    }


    render(){
        return (
      
            
       
        <div id="correspondanceGrid" className="awsui-grid">
          <div className="awsui-row messageRow--2jCMjZx19S">
            <div className="col-s-2 col-xxs-12 submittedPlaceholder--1NrGfZOtmo">
              <div>
                <p id="submittedBy" data-test="message-submittedBy">
                  <details className="awsui-tooltip" data-initialized="true">
                    <span>
                      <span
                        className="awsui-tooltip-trigger"
                        awsui-tooltip-region="trigger"
                      >
                        <span>
                          <p className="submittedByTooltip--3VmiRDior1">
                           {this.state.senderName}
                          </p>
                        </span>
                      </span>
                      <div className="awsui-tooltip-position-right awsui-tooltip-wrap">
                        <div
                          className="awsui-tooltip-text"
                          awsui-tooltip-region="text"
                        >
                          {this.state.senderEmail}
                        </div>
                      </div>
                    </span>
                  </details>
                </p>
                <div className="messageDate--2oqmuDg1nE `awsui-util-label`">
                {this.state.msgDate.toLocaleString('en-US', {
                  weekday: 'long'
                })}&nbsp;
                {this.state.msgDate.toLocaleString('en-US', {
                  month: 'long'
                })}   {this.state.msgDate.toLocaleString('en-US', {
                  day: 'numeric'
                })}, {this.state.msgDate.toLocaleString('en-US', {
                  year: 'numeric'
                })}
                  <br />
                  {this.state.msgDate.toLocaleString('en-US', {
                 
                    hour12: true,
                    minute: '2-digit',
                    hour: '2-digit',
                    second: '2-digit',
                    timeZoneName: 'long',
                  })}
                 
                </div>
              </div>
            </div>
            <div className="col-s-10 col-xxs-12">
              <span className="col-s-10 col-xxs-12 linkifyWrapper--3jj-MXH70a">
                <div
                  className="messagePlaceholder--3B2MrJJXA9"
                  id="correspondence-message-body"
                  data-test="message-body"
                >
                  <div className="textWrapper--1mgvskQWln">
                    <div
                      id="message-text-normal"
                      className="normalText--LTsiMDaV6j"
                    >
                     {
                          this.state.msgBody
                     }
                    </div>
                  </div>
                  <p style={{
                    display: this.state.attachmentLinks.length > 0 ? 'block' : 'none'
                  }}>
                    Attachments
                    <span>
                      <br />
                      <a
                        className="attachmentLink--1cfFOcGbaF"
                        target="_blank"
                        href="https://support.console.aws.amazon.com/support/downloadAttachment?attachmentId=AAMA-EFRSURBSGlqUVc1b0VFKzNyWDZzL1ZpSWNXNDQwcXNVelZBQlpYaTdVdU82Slc5WElRR1NLUWtnQ1diZUN0Zy9KQW40YkxReEFBQUFmakI4QmdrcWhraUc5dzBCQndhZ2J6QnRBZ0VBTUdnR0NTcUdTSWIzRFFFSEFUQWVCZ2xnaGtnQlpRTUVBUzR3RVFRTVFlL0tSK20rUXloVzFPQm5BZ0VRZ0RzaFluMVVMMlRsTVBqWlBDL0RpNk93Smt3MlZGYW5kVlZDVmpLLzdkVzUwbUkxZ0JmZmtMVGVpQzVDOTZKaHZBVGQ1cWVMZTVqa1ZKVXBxdz09hvqTVjcCXbsRfOAr2Gpk4rRgbKCFKvPf5bPPjTDa8gVIcK6EwYaiuzs0RCFnhKfKSbGuAs_hGEqI9J4Tj4_XNyU9KYbpglcuf8BlJZcR4o0Fx_D_iOeuDsfhv9sBq8w_lYPv95EIWGZXhnJCue5Sv36PgJvl-VB_vPgMC4pmsxsQNzCE6EMVTgqx_9-EBoAg0JUtV0CSwCCd59yPNt6QYHVoge4lvUJvxTwFSIJOSGE0rJa2nWA8Ljx2RBmRkyOTldiZuNSVDZ3WnapPX5nWLhpNK33q-RrIQ5IMcGvaoCydkpL1izf2W__3DtO0i6Yc78Z3WyL1cX0Sfx36m4O9421OTUH7FONvHHZGO9J9RpbgqvHleyBJ2z2DSIu01HX94AT8oYOD2H9D5sAj8VX56LejJqKRQGpPPocm-Z2Oqc5r9LBKH4wPck9WHjegmkKWyB-hYYRQQcfdWsnfvcw7_sVNlvoUBbFw-3aAK7bXMTJpOpPvnyLiUm3dB7uUmR9BrF7UpymvPWSE_y1oOStT6CtQvSBFOKiYPQ4f5Rd2GadPh56SZXT5HmkdhSYuIWuf7JTmLUddcAFm3PkAUADqyyf1jeTllBMASAC2i8YbsQmILa3_qBfL7rka3HrZOYM7oMRSIVu3WlpWnhtBROjLf6eEIrE6NWm6q2vamckItqMTK-0as8sPvl7Pyd11PuTMQB0uZDk="
                        data-test="attachment-link"
                        rel="noopener noreferrer"
                        style={{
                          display: 'none',
                          visibility: 'hidden'
                        }}
                      >
                        Screen Shot 2022-06-05 at 10.20.39 PM.png
                      </a>

                      {
                        this.state.attachmentLinks.map((link, index) => {
                          return (
                            <a
                              className="attachmentLink--1cfFOcGbaF"
                              target="_blank"
                              href={link.link}
                              key={index}
                              data-test="attachment-link"
                              rel="noopener noreferrer"
                            >
                              {link.fileName}
                            </a>
                          )
                        })
                      }
                    </span>
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>

            
        )
    }
}


