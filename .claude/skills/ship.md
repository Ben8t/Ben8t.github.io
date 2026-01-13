# ship

Quickly add, commit, and push changes to the current branch.

## Arguments

- `message` (optional): Commit message. If not provided, will prompt the user for one.

## Instructions

1. Run `git status` to check the current state of the repository
2. If there are no changes to commit, inform the user and exit
3. If a commit message was provided via args, use it. Otherwise, ask the user for a commit message using AskUserQuestion
4. Run `git add .` to stage all changes
5. Create a commit with the message using the git commit protocol from the system instructions:
   - Format the message properly with a Co-Authored-By line
   - Use a heredoc for proper formatting
6. Run `git push` to push the changes to the remote
7. Confirm success to the user with a summary of what was pushed

## Example Usage

```
/ship "Add new printer case study"
/ship -m "Fix typography issues"
/ship
```

## Notes

- Always follow git safety protocols
- Show git status before committing
- Confirm successful push with the user
- If push fails, report the error clearly
