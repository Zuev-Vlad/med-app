import React, { ReactNode } from "react";

export const PageTitle: React.FC<{ title: ReactNode }> = ({ title }) => {
    return (
        <div className="pb-3">
            <h1>{title}</h1>
        </div>
    )
}