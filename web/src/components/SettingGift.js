import GiftForm from "./GiftForm"

const SettingGift = () => {
    const mockProps = [undefined,undefined];
    return ( 
        <div className = "SettingGift">
            <p className="setting_label">추첨설정</p>
            <p className="step_label">경품 정하기</p>
            {
                mockProps.map( () => {
                    return <GiftForm/>
                })
            }
            <div className ="button_wrapper">
                <button className = "previous_button">이전</button>
                <button className = "start_draw_button">추첨하기</button>
            </div>
        </div>
    );
}

export default SettingGift