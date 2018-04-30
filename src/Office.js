import React, {Component} from 'react';

const VIEW_ACTION = 'https://word-view.officeapps-df.live.com/wv/wordviewerframe.aspx?<ui=UI_LLCC&><rs=DC_LLCC&><dchat=DISABLE_CHAT&><hid=HOST_SESSION_ID&><showpagestats=PERFSTATS&><IsLicensedUser=BUSINESS_USER&><actnavid=ACTIVITY_NAVIGATION_ID&>';
const EDIT_ACTION = 'https://word-edit.officeapps-df.live.com/we/wordeditorframe.aspx?<ui=UI_LLCC&><rs=DC_LLCC&><dchat=DISABLE_CHAT&><hid=HOST_SESSION_ID&><showpagestats=PERFSTATS&><IsLicensedUser=BUSINESS_USER&><actnavid=ACTIVITY_NAVIGATION_ID&>';
const OFFICE_ONLINE_ACTION_URL = "wait";
const ACCESS_TOKEN_VALUE = "token";
const ACCESS_TOKEN_TTL_VALUE = "ttl";

class Office extends Component {
    render() {
        return (
            <div className="office">
                <form id="office_form" ref={el => this.office_form = el} name="office_form" target="office_frame"
                      action={OFFICE_ONLINE_ACTION_URL} method="post">
                    <input name="access_token" value={ACCESS_TOKEN_VALUE} type="hidden"/>
                    <input name="access_token_ttl" value={ACCESS_TOKEN_TTL_VALUE} type="hidden"/>
                </form>
                <span id="frameholder" ref={el => this.frameholder = el}></span>
            </div>
        );
    }

    componentDidMount() {
        const office_frame = document.createElement('iframe');
        office_frame.name = 'office_frame';
        office_frame.id = 'office_frame';
        office_frame.title = 'Office Online';
        office_frame.setAttribute('allowfullscreen', 'true');
        this.frameholder.appendChild(office_frame);
        this.office_form.submit();
    }

}

export default Office;
