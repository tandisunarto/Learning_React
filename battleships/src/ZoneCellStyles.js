const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing.unit,
        padding: 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 40,
        height: 40,
    },
    cell: {
        width: 40,
        height: 40,
        padding: 0
    },
    shipCell: {
        backgroundColor: '#91DBA0FF',
    },
    enemyCell: {
        backgroundColor: '#E0F0A5FF',
    },
    homeCell: {
        backgroundColor: '#DDEEFFFF',
    },
    hitCell: {
        backgroundColor: '#F75E5EFF',
    },
    missedCell: {
        backgroundColor: '#6EDCfAFF',
    }
});

export default styles