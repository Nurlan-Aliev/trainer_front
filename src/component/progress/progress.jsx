import {useTranslation} from "react-i18next";

export function Progress({count, len}){
    const {t} = useTranslation();

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="fs-4">{t('fillInTheBlankTitle')}</h2>
                <div className="border fs-7 rounded px-1">{t('question')} {count+1} {t('of')} {len}</div>
            </div>

            <progress value={count} max={len}></progress>
        </div>
    )
}