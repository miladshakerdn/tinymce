/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export declare type CopyProps<T> = {
    [P in keyof T]: any;
};
export interface IPropTypes {
    scriptPath: string;
    apiKey: string;
    cloudChannel: string;
    id: string;
    init: any;
    initialValue: string;
    inline: boolean;
    modelEvents: string[] | string;
    plugins: string[] | string;
    tagName: string;
    toolbar: string[] | string;
    value: string;
    disabled: boolean;
}
export declare const editorProps: CopyProps<IPropTypes>;
