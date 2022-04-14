/* eslint-disable import/no-anonymous-default-export */
export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren
    } else if(elseChild){
        return elseChild
    }
    
    return false
}

export const Else = props => props.children