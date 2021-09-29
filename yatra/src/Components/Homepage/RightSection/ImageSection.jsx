import React from "react";
import styled from "styled-components";

const AdImage = styled.div`
    display: flex;
    flex-direction: column;
    // background-color: yellow;
    width: 100%;

    .imgSection1 img {
        width: 100%;
    }

    .imgSection2 {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .imgSection2 img {
        width: 49%;
    }

    @media all and (max-width: 1000px) {
        display: none;
    }
`;

function ImageSection() {
    return (
        <AdImage>
            <div className="imgSection1">
                <img
                    className="img-1"
                    src="https://www.yatra.com/ythomepagecms/media/banner/2021/Jun/50572d900d1e844a320d897c415b3646.jpg"
                    alt="Claim Refund"
                />
            </div>
            <div>
                <div className="imgSection2">
                    <img
                        className="img-2"
                        src="https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/5b10fea20065899f659cec0ecee16bca.jpg"
                        alt="Claim Refund"
                    />
                    <img
                        className="img-section-3"
                        src="https://www.yatra.com/ythomepagecms/media/double_banner/2021/Mar/174c6e1decf14ca21efc630875514b50.jpg"
                        alt="Claim Refund"
                    />
                </div>
            </div>
        </AdImage>
    );
}

export { ImageSection };